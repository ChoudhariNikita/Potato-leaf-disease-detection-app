import React from 'react';
import { View, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { Camera, Upload } from 'lucide-react-native';
import globalStyles from '../../styles/globalStyles';
import styles from './styles';
import Navbar from '../Navbar/Navbar';

const CaptureScreen = ({ navigation }) => {
  const handleCapture = () => {
    alert('Image captured! This would analyze the leaf in a real app.');
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.centeredContainer}>
        <Text style={styles.title}>Capture Plant Leaf</Text>
        
        <TouchableOpacity 
          onPress={handleCapture}
          style={styles.captureButton}
        >
          <Camera size={32} color={styles.captureButtonIcon.color} />
        </TouchableOpacity>
        
        <Text style={styles.subtitle}>
          Position the leaf in the center of the frame and tap the button to capture
        </Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.uploadButton}>
            <Upload size={20} color={styles.uploadButtonIcon.color} style={styles.uploadButtonIcon} />
            <Text style={styles.uploadButtonText}>Upload</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.galleryButton}>
            <Text style={styles.galleryButtonText}>Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <Navbar navigation={navigation} activeRoute="Capture" />
    </SafeAreaView>
  );
};

export default CaptureScreen;