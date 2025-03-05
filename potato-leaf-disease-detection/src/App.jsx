import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import HomeScreen from './components/HomeScreen/HomeScreen';
import CaptureScreen from './components/CaptureScreen/CaptureScreen';
import DiseaseInfoScreen from './components/DiseaseInfoScreen/DiseaseInfoScreen';
import ChatbotScreen from './components/ChatbotScreen/ChatbotScreen';

// Create stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Capture" component={CaptureScreen} />
        <Stack.Screen name="Info" component={DiseaseInfoScreen} />
        <Stack.Screen name="Chat" component={ChatbotScreen} />
        {/* Add placeholder screens for the other navbar items */}
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