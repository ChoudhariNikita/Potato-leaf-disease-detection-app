import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Navbar from '../Navbar/Navbar';
import styles from './DoctorContactScreenStyles';

const DoctorContactScreen = ({ navigation }) => {
  const doctors = [
    {
      name: "Dr. John Doe",
      specialization: "Plant Pathologist",
      contact: "Call, WhatsApp, Email",
    },
    // Add more doctors here
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {doctors.map((doctor, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{doctor.name}</Text>
            <Text style={styles.cardText}>{doctor.specialization}</Text>
            <Text style={styles.cardText}>{doctor.contact}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Video Consultation</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <Navbar navigation={navigation} activeRoute="Consult" />
    </SafeAreaView>
  );
};

export default DoctorContactScreen;