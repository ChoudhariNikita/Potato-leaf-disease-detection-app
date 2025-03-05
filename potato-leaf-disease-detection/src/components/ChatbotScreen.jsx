import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, FlatList, Keyboard } from 'react-native';
import globalStyles, { colors, spacing } from '../styles/globalStyles';
import { generateContent } from '../utils/api';
import { Animated, Easing } from 'react-native';

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initialMessage = {
      id: Date.now().toString(),
      text: 'Hi there! How can I help you today?',
      sender: 'bot',
    };
    setMessages([initialMessage]);
  }, []);

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
    <View style={{ 
      alignSelf: item.sender === 'user' ? 'flex-end' : 'flex-start', 
      backgroundColor: item.sender === 'user' ? colors.primary : colors.secondary, 
      padding: spacing.sm, 
      borderRadius: 8, 
      marginVertical: spacing.xs,
      maxWidth: '80%',
      marginHorizontal: spacing.md,
    }}>
      <Text style={{ color: colors.white }}>{item.text}</Text>
    </View>
  );

  const renderHeader = () => (
    <View style={{ 
        alignItems: 'center', 
        marginVertical: spacing.md, 
        backgroundColor: colors.background, 
        borderColor: colors.border, 
        borderWidth: 1, 
        borderRadius: 8, 
        padding: spacing.sm 
    }}>
        <Text style={{ fontSize: 16, color: colors.text }}>Today</Text>
    </View>
  );

const renderFooter = () => {
    const dotScale = new Animated.Value(1);

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

    return loading ? (
        <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            marginVertical: spacing.md, 
            marginHorizontal: spacing.md 
        }}>
            <Animated.Text style={{ 
                color: colors.text, 
                fontSize: 18, 
                transform: [{ scale: dotScale }] 
            }}>
                ...
            </Animated.Text>
        </View>
    ) : null;
};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ flex: 1, padding: spacing.md }}>
        <FlatList 
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: spacing.lg }}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: spacing.md }}>
          <TextInput 
            value={input}
            onChangeText={setInput}
            placeholder="Type a message..."
            onKeyPress={handleKeyPress}
            style={{ 
              flex: 1, 
              padding: spacing.sm, 
              borderColor: colors.border, 
              borderWidth: 1, 
              borderRadius: 8, 
              marginRight: spacing.sm 
            }}
          />
          <TouchableOpacity 
            onPress={handleSend}
            style={{ 
              backgroundColor: colors.primary, 
              padding: spacing.sm, 
              borderRadius: 8 
            }}
          >
            <Text style={{ color: colors.white }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatbotScreen;