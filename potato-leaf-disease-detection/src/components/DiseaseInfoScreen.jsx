import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import globalStyles, { spacing, colors } from '../styles/globalStyles';
import Navbar from '../components/Navbar';

const DiseaseInfoScreen = ({ route, navigation }) => {
  // In a real app, you'd get this from the route params
  // const { disease } = route.params;
  
  // Sample disease data for demonstration
  const disease = {
    name: "Late Blight",
    description: "Late blight is a plant disease that mainly attacks potatoes and tomatoes. It is caused by the microorganism Phytophthora infestans. The disease spreads rapidly in wet weather with temperatures of 15-20°C.",
    treatment: "Remove and destroy all infected plant parts. Apply copper-based fungicides preventatively. Ensure proper spacing between plants to improve air circulation. Avoid overhead irrigation."
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView style={globalStyles.container}>
        <Text style={globalStyles.title}>{disease.name}</Text>
        
        <View style={globalStyles.card}>
          <Text style={{ fontWeight: 'bold', marginBottom: spacing.sm, color: colors.primary }}>
            Description
          </Text>
          <Text style={globalStyles.bodyText}>
            {disease.description}
          </Text>
        </View>
        
        <View style={globalStyles.card}>
          <Text style={{ fontWeight: 'bold', marginBottom: spacing.sm, color: colors.primary }}>
            Treatment
          </Text>
          <Text style={globalStyles.bodyText}>
            {disease.treatment}
          </Text>
        </View>
      </ScrollView>
      
      <Navbar navigation={navigation} activeRoute="Info" />
    </SafeAreaView>
  );
};

export default DiseaseInfoScreen;