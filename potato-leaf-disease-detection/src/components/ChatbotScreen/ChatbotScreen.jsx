import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, FlatList, Keyboard, Animated, Easing } from 'react-native';
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

  const renderItem = ({ item }) => (
    <View style={[
      styles.messageContainer, 
      item.sender === 'user' && styles.userMessageContainer
    ]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Today</Text>
    </View>
  );

  const renderFooter = () => (
    loading ? (
      <View style={styles.footer}>
        <Animated.Text style={[styles.typingIndicator, { transform: [{ scale: dotScale }] }]}>
          ...
        </Animated.Text>
      </View>
    ) : null
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
          returnKeyType="send"
          onSubmitEditing={handleSend}
          style={styles.input}
        />
        <TouchableOpacity 
          onPress={handleSend}
          style={styles.sendButton}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatbotScreen;