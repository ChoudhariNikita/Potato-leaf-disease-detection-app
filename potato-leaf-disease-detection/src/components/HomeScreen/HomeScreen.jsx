import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { User } from 'lucide-react-native';
import Navbar from '../Navbar/Navbar';
import globalStyles, { colors, spacing } from '../../styles/globalStyles';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={globalStyles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={globalStyles.title}>Welcome to LeafShield</Text>
          <Text style={globalStyles.subtitle}>
            Instantly diagnose and receive treatment advice for potato leaf diseases
          </Text>
        </View>
      </View>
      
      <Navbar navigation={navigation} activeRoute="Home" />
      
      <View style={{ position: 'absolute', top: spacing.md, right: spacing.md, flexDirection: 'row', alignItems: 'center' }}>
        <User size={24} color={colors.primary} />
        <Text style={{ marginLeft: spacing.sm, color: colors.primary }}>Username</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;