import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, FlatList, Keyboard, Animated, Easing } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import styles from './styles';
import { generateContent } from '../../utils/api';

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const dotScale = new Animated.Value(1);

  useEffect(() => {
    const initialMessage = {
      id: Date.now().toString(),
      text: 'Hi there! How can I help you today?',
      sender: 'bot',
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
            useNativeDriver: false,
          }),
          Animated.timing(dotScale, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: false,
          }),
        ])
      ).start();
    } else {
      dotScale.setValue(1);
    }
  }, [loading]);

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: input, sender: 'user' }]);
      setInput('');
      Keyboard.dismiss();
      setLoading(true);

      try {
        const response = await generateContent(input);
        const botMessage = response?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: (Date.now() + 1).toString(), text: botMessage, sender: 'bot' },
        ]);
      } catch (error) {
        console.error('Error getting response from API:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: (Date.now() + 1).toString(), text: 'Error generating response from API.', sender: 'bot' },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === 'Enter') {
      handleSend();
    }
  };

  const renderItem = ({ item }) => (
    <View style={[
      styles.messageContainer,
      item.sender === 'user' ? styles.userMessage : styles.botMessage
    ]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Today</Text>
    </View>
  );

  const renderFooter = () => (
    loading ? (
      <View style={styles.footerContainer}>
        <Animated.Text style={[styles.footerText, { transform: [{ scale: dotScale }] }]}>
          ...
        </Animated.Text>
      </View>
    ) : null
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.chatContainer}>
        <FlatList 
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
        />
        <View style={styles.inputContainer}>
          <TextInput 
            value={input}
            onChangeText={setInput}
            placeholder="Type a message..."
            onKeyPress={handleKeyPress}
            style={styles.input}
          />
          <TouchableOpacity 
            onPress={handleSend}
            style={styles.sendButton}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatbotScreen;