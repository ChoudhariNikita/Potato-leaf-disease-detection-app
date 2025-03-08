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
    {
      name: "Early Blight",
      description: "Early blight is a common disease affecting potatoes and tomatoes, caused by the fungus Alternaria solani. It typically appears on older leaves first, causing dark spots with concentric rings.",
      treatment: "Remove and destroy infected leaves. Apply fungicides containing chlorothalonil or mancozeb. Rotate crops and avoid planting potatoes or tomatoes in the same location each year."
    },
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