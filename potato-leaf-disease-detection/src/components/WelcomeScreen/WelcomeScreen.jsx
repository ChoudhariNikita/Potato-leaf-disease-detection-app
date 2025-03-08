import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, Picker } from 'react-native';
import styles from './WelcomeScreenStyles';

const WelcomeScreen = ({ navigation }) => {
  const [language, setLanguage] = useState('english');

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to PlantHealth</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Sign Up / Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('GuestLogin')}>
          <Text style={styles.secondaryButtonText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={language} onValueChange={(itemValue) => setLanguage(itemValue)} style={styles.picker}>
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Español" value="espanol" />
          <Picker.Item label="हिंदी" value="hindi" />
        </Picker>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;