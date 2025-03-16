import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './PredictionResultStyles';

const PredictionResult = ({ response, image, onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prediction Result</Text>
      {image && (
        <Image source={{ uri: image }} style={styles.image} />
      )}
      <Text style={styles.label}><strong>Label:</strong> {response?.class}</Text>
      <Text style={styles.confidence}><strong>Confidence:</strong> {response?.confidence ? (response.confidence * 100).toFixed(2) + '%' : ''}</Text>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PredictionResult;
