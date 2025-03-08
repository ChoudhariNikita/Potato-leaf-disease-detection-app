import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './WelcomeScreenStyles';
import { colors } from '../../styles/globalStyles'; // Import colors

const WelcomeScreen = ({ navigation }) => {
  const [language, setLanguage] = useState('english');
  const appVersion = "1.0.0";

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={Platform.OS === 'android' ? colors.background : undefined}
      />
      
      {/* Language selector in header */}
      <View style={styles.header}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={language}
            onValueChange={(itemValue) => setLanguage(itemValue)}
            style={styles.picker}
            dropdownIconColor={colors.primary}
          >
            <Picker.Item label="English" value="english" />
            <Picker.Item label="Español" value="espanol" />
            <Picker.Item label="हिंदी" value="hindi" />
          </Picker>
        </View>
      </View>
      
      {/* Main content */}
      <Image 
        source={require('../../assets/icon.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to PlantHealth</Text>
      
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Sign Up / Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.secondaryButton} 
          onPress={() => navigation.navigate('GuestLogin')}
          activeOpacity={0.6}
        >
          <Text style={styles.secondaryButtonText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
      
      {/* Footer with version */}
      <View style={styles.footer}>
        <Text style={styles.version}>Version {appVersion}</Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;