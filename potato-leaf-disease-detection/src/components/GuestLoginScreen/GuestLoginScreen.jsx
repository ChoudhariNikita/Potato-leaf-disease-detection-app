import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './GuestLoginScreenStyles';

const GuestLoginScreen = ({ navigation, setUsername }) => {
  const [name, setName] = useState('');

  const handleContinue = () => {
    setUsername(name);
    navigation.navigate('Home', { isLoggedIn: false });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Enter Your Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GuestLoginScreen;