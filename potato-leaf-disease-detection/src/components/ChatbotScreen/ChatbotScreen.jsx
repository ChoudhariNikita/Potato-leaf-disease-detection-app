import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Keyboard, Animated, Easing } from 'react-native';
import { generateContent } from '../../utils/api';
import Navbar from '../Navbar/Navbar';
import styles from './ChatbotScreenStyles';

const ChatbotScreen = ({ username, navigation }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const dotScale = new Animated.Value(1);

  useEffect(() => {
    const initialMessage = {
      id: Date.now().toString(),
      text: `Hi ${username}! How can I help you today?`,
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

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { id: Date.now().toString(), text: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');
      Keyboard.dismiss();
      setLoading(true);

      try {
        const response = await generateContent(input);
        console.log('API response:', response); // Log the response data
        if (response && response.candidates && response.candidates.length > 0) {
          const botMessage = { id: Date.now().toString(), text: response.candidates[0].content.parts[0].text, sender: 'bot' };
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

  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dateText}>{new Date().toLocaleDateString()}</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {messages.map((message) => renderMessage({ item: message }))}
        {loading && (
          <View style={styles.loadingContainer}>
            <Animated.View style={[styles.loadingDot, { transform: [{ scale: dotScale }] }]} />
            <Animated.View style={[styles.loadingDot, { transform: [{ scale: dotScale }] }]} />
            <Animated.View style={[styles.loadingDot, { transform: [{ scale: dotScale }] }]} />
          </View>
        )}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
          style={styles.input}
          onKeyPress={handleKeyPress}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
      <Navbar navigation={navigation} activeRoute="Chat" isLoggedIn={true} />
    </SafeAreaView>
  );
};

export default ChatbotScreen;