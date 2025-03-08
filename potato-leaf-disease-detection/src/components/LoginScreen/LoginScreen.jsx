import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import styles from './LoginScreenStyles';
import { LOGIN_SCREEN } from '../../utils/constants';

const LoginScreen = ({ navigation, setIsLoggedIn, setUsername }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'Nikita' && password === '123') {
      setIsLoggedIn(true);
      setUsername('Nikita');
      navigation.navigate('Home');
    } else {
      alert(LOGIN_SCREEN.INVALID_CREDENTIALS);
    }
  };

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === 'Enter') {
      handleLogin();
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.title}>{LOGIN_SCREEN.TITLE}</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder={LOGIN_SCREEN.EMAIL_PLACEHOLDER}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        onKeyPress={handleKeyPress}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={LOGIN_SCREEN.PASSWORD_PLACEHOLDER}
        secureTextEntry
        style={styles.input}
        onKeyPress={handleKeyPress}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{LOGIN_SCREEN.LOGIN_BUTTON}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>{LOGIN_SCREEN.CONTINUE_WITH_GOOGLE}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('GuestLogin')}>
        <Text style={styles.skipButtonText}>{LOGIN_SCREEN.SKIP_CONTINUE_AS_GUEST}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;