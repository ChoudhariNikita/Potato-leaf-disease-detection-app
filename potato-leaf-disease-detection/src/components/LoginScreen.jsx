import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import globalStyles, { spacing } from '../styles/globalStyles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={[globalStyles.centeredContainer, { padding: spacing.md }]}>
        <Text style={globalStyles.title}>Login to PlantHealth</Text>
        
        <TextInput 
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          style={globalStyles.input}
        />
        
        <TextInput 
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          style={globalStyles.input}
        />
        
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[globalStyles.secondaryButton, { borderColor: '#DDDDDD' }]}
        >
          <Text style={{ color: '#666666' }}>Continue with Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}
          style={{ alignItems: 'center', marginTop: spacing.lg }}
        >
          <Text style={{ color: globalStyles.button.backgroundColor }}>
            Skip & Continue as Guest
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;