import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, SafeAreaView, Text, Modal, Alert, Linking } from 'react-native';
import { Camera as CameraIcon, Upload } from 'lucide-react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import styles from './CaptureScreenStyles';
import Navbar from '../Navbar/Navbar';
import PredictionResult from '../PredictionResult/PredictionResult';

const CaptureScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      } catch (error) {
        console.error('Camera permission error:', error);
        setHasPermission(false);
      }
    })();
  }, []);

  const requestPermissionAgain = () => {
    Alert.alert(
      'Camera Permission',
      'Camera access is required to take pictures. Please enable it in settings.',
      [{ text: 'Go to Settings', onPress: () => Linking.openSettings() }, { text: 'Cancel', style: 'cancel' }]
    );
  };

  const handleCapture = async () => {
    if (!cameraRef.current) {
      console.error("Camera reference is null");
      return;
    }
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);

      setIsLoading(true);
      setResponse(null);

      const formData = new FormData();
      formData.append('file', {
        uri: photo.uri,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });

      try {
        const res = await axios.post('https://potato-leaf-disease-api.onrender.com/predict', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setResponse(res.data);
        setShowModal(true);
      } catch (error) {
        console.error('Error uploading the file:', error);
        Alert.alert('Upload Failed', 'Something went wrong while uploading the image.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleGalleryUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission Denied', 'You need to allow access to your gallery.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });

    if (!result.canceled) {
      setCapturedImage(result.assets[0].uri);
      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (imageUri) => {
    setIsLoading(true);
    setResponse(null);

    const formData = new FormData();
    formData.append('file', {
      uri: imageUri,
      name: 'photo.jpg',
      type: 'image/jpeg',
    });

    try {
      const res = await axios.post('https://potato-leaf-disease-api.onrender.com/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setResponse(res.data);
      setShowModal(true);
    } catch (error) {
      console.error('Error uploading the file:', error);
      Alert.alert('Upload Failed', 'Something went wrong while uploading the image.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  if (hasPermission === null) return <View />;
  if (hasPermission === false) {
    return (
      <View style={styles.permissionContainer}>
        <Text>No access to camera</Text>
        <TouchableOpacity style={styles.permissionButton} onPress={requestPermissionAgain}>
          <Text style={styles.permissionButtonText}>Open Settings</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.cameraContainer} ref={cameraRef} type={Camera.Constants.Type.back}>
        <View style={styles.cameraContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
            <CameraIcon size={32} color={styles.captureButtonIcon.color || "black"} />
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.uploadButton} onPress={handleGalleryUpload}>
          <Upload size={20} color={styles.uploadButtonIcon.color} style={styles.uploadButtonIcon} />
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.galleryButton} onPress={handleGalleryUpload}>
          <Text style={styles.galleryButtonText}>Gallery</Text>
        </TouchableOpacity>
      </View>
      <Navbar navigation={navigation} activeRoute="Capture" isLoggedIn={true} />
      <Modal visible={showModal} onRequestClose={handleCloseModal}>
        <PredictionResult response={response} image={capturedImage} onClose={handleCloseModal} />
      </Modal>
    </SafeAreaView>
  );
};

export default CaptureScreen;