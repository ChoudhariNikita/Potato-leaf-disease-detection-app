import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { User } from 'lucide-react-native';
import Navbar from '../Navbar/Navbar';
import styles from './HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  const isLoggedIn = true;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <User size={24} color={styles.userIcon.color} />
        <Text style={styles.username}>Username</Text>
      </View>
      <View style={styles.cameraContainer}>
        <TouchableOpacity style={styles.captureButton}>
          <Text style={styles.captureButtonText}>Capture</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.carouselContainer}>
        <Text style={styles.carouselTitle}>Previously Captured Images</Text>
        {/* Add carousel component here */}
      </View>
      <Navbar navigation={navigation} activeRoute="Home" />
    </SafeAreaView>
  );
};

export default HomeScreen;