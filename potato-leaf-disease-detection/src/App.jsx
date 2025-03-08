import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';

// Import screens
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';
import CaptureScreen from './components/CaptureScreen/CaptureScreen';
import DiseaseInfoScreen from './components/DiseaseInfoScreen/DiseaseInfoScreen';
import ChatbotScreen from './components/ChatbotScreen/ChatbotScreen';
import GuestLoginScreen from './components/GuestLoginScreen/GuestLoginScreen';

// Create stack navigator
const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login">
          {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />}
        </Stack.Screen>
        <Stack.Screen name="GuestLogin">
          {props => <GuestLoginScreen {...props} setUsername={setUsername} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} isLoggedIn={isLoggedIn} username={username} />}
        </Stack.Screen>
        <Stack.Screen name="Capture" component={CaptureScreen} />
        <Stack.Screen name="Info" component={DiseaseInfoScreen} />
        <Stack.Screen name="Chat">
          {props => <ChatbotScreen {...props} username={username} />}
        </Stack.Screen>
        <Stack.Screen name="Learn" component={PlaceholderScreen} />
        <Stack.Screen name="Translate" component={PlaceholderScreen} />
        <Stack.Screen name="Consult" component={PlaceholderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Simple placeholder for screens not yet implemented
const PlaceholderScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        {route.name} Screen Coming Soon
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#2E7D32',
          padding: 10,
          borderRadius: 8,
        }}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={{ color: 'white' }}>Return Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;