import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import Navbar from '../Navbar/Navbar';
import styles from './DiseaseInfoScreenStyles';

const DiseaseInfoScreen = ({ navigation }) => {
  const diseases = [
    {
      name: "Late Blight",
      description: "Late blight is a plant disease that mainly attacks potatoes and tomatoes. It is caused by the microorganism Phytophthora infestans. The disease spreads rapidly in wet weather with temperatures of 15-20°C.",
      treatment: "Remove and destroy all infected plant parts. Apply copper-based fungicides preventatively. Ensure proper spacing between plants to improve air circulation. Avoid overhead irrigation."
    },
    // Add more diseases here
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {diseases.map((disease, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{disease.name}</Text>
            <Text style={styles.cardText}>{disease.description}</Text>
            <Text style={styles.cardText}>{disease.treatment}</Text>
          </View>
        ))}
      </ScrollView>
      <Navbar navigation={navigation} activeRoute="Info" />
    </SafeAreaView>
  );
};

export default DiseaseInfoScreen;