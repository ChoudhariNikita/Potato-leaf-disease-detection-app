import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView, 
  Keyboard, 
  Animated, 
  Easing,
  StatusBar,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { generateContent } from '../../utils/api';
import Navbar from '../Navbar/Navbar';
import styles from './ChatbotScreenStyles';

const ChatbotScreen = ({ username, navigation }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const dotScale = new Animated.Value(1);
  const scrollViewRef = useRef();

  useEffect(() => {
    const initialMessage = {
      id: Date.now().toString(),
      text: `Hi ${username}! How can I help you today?`,
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    if (loading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(dotScale, {
            toValue: 1.5,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(dotScale, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      dotScale.setValue(1);
    }
  }, [loading]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { 
        id: Date.now().toString(), 
        text: input, 
        sender: 'user',
        timestamp: new Date()
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');
      Keyboard.dismiss();
      setLoading(true);

      try {
        const response = await generateContent(input);
        console.log('API response:', response); // Log the response data
        if (response && response.candidates && response.candidates.length > 0) {
          const botMessage = { 
            id: Date.now().toString(), 
            text: response.candidates[0].content.parts[0].text, 
            sender: 'bot',
            timestamp: new Date()
          };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
        } else {
          console.error('Invalid response from API');
        }
      } catch (error) {
        console.error('Error generating content:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === 'Enter') {
      handleSend();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderMessage = (item, index) => {
    const isUser = item.sender === 'user';
    
    // Check if we should show date divider
    const showDateDivider = index === 0 || 
      new Date(item.timestamp).toDateString() !== 
      new Date(messages[index - 1].timestamp).toDateString();
    
    return (
      <View key={item.id}>
        {showDateDivider && (
          <View style={styles.dateDivider}>
            <View style={styles.dateDividerLine} />
            <Text style={styles.dateDividerText}>
              {new Date(item.timestamp).toLocaleDateString([], {
                weekday: 'short',
                month: 'short', 
                day: 'numeric'
              })}
            </Text>
          </View>
        )}
        
        {!isUser && (
          <View style={styles.messageRow}>
            <View style={styles.botAvatar}>
              <Text style={styles.botAvatarText}>P</Text>
            </View>
            <View style={[styles.messageContainer, styles.botMessage]}>
              <Text style={styles.messageText}>{item.text}</Text>
              <Text style={styles.timestampText}>{formatTime(new Date(item.timestamp))}</Text>
            </View>
          </View>
        )}
        
        {isUser && (
          <View style={[styles.messageContainer, styles.userMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.timestampText}>{formatTime(new Date(item.timestamp))}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Chatbot</Text>
        <Text style={styles.subtitle}>Ask me anything!</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      
      <View style={{ flex: 1 }}>
        <ScrollView 
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          {messages.map((message, index) => renderMessage(message, index))}
          
          {loading && (
            <View style={styles.messageRow}>
              <View style={styles.botAvatar}>
                <Text style={styles.botAvatarText}>P</Text>
              </View>
              <View style={styles.typingIndicator}>
                <View style={{flexDirection: 'row'}}>
                  <Animated.View style={[styles.loadingDot, { transform: [{ scale: dotScale }] }]} />
                  <Animated.View style={[styles.loadingDot, { transform: [{ scale: dotScale }] }]} />
                  <Animated.View style={[styles.loadingDot, { transform: [{ scale: dotScale }] }]} />
                </View>
              </View>
            </View>
          )}
        </ScrollView>
        
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
        >
          <View style={styles.inputContainer}>
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Type a message..."
              style={styles.input}
              onKeyPress={handleKeyPress}
              multiline={false}
              returnKeyType="send"
            />
            <TouchableOpacity 
              style={styles.sendButton} 
              onPress={handleSend}
              activeOpacity={0.7}
            >
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
      
      <Navbar navigation={navigation} activeRoute="Chat" isLoggedIn={true} />
    </SafeAreaView>
  );
};

export default ChatbotScreen;