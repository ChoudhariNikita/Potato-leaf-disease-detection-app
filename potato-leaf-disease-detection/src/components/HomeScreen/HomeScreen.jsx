import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { User } from 'lucide-react-native';
import Navbar from '../Navbar/Navbar';
import styles from './HomeScreenStyles';

const HomeScreen = ({ navigation, isLoggedIn, username }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <User size={24} color={styles.userIcon.color} />
        <Text style={styles.username}>{username || 'Username'}</Text>
      </View>
      <View style={styles.cameraContainer}>
        <Text style={styles.welcomeMessage}>Hello, {username || 'Username'}!</Text>
        <Text style={styles.additionalMessage}>Welcome to PlantHealth.</Text>
        <Text style={styles.motto}>Detecting plant diseases with ease.</Text>
        <Text style={styles.additionalMessage}>Use the capture button to take a photo of a potato leaf.</Text>
      </View>
      <Navbar navigation={navigation} activeRoute="Home" isLoggedIn={isLoggedIn} />
    </SafeAreaView>
  );
};

export default HomeScreen;