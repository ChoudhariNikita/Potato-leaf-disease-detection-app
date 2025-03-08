import React from 'react';
import { View, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { Camera, Upload } from 'lucide-react-native';
import styles from './CaptureScreenStyles';
import Navbar from '../Navbar/Navbar';

const CaptureScreen = ({ navigation }) => {
  const handleCapture = () => {
    alert('Image captured! This would analyze the leaf in a real app.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraContainer}>
        <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
          <Camera size={32} color={styles.captureButtonIcon.color} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.uploadButton}>
          <Upload size={20} color={styles.uploadButtonIcon.color} style={styles.uploadButtonIcon} />
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.galleryButton}>
          <Text style={styles.galleryButtonText}>Gallery</Text>
        </TouchableOpacity>
      </View>
      <Navbar navigation={navigation} activeRoute="Capture" isLoggedIn={true} />
    </SafeAreaView>
  );
};

export default CaptureScreen;