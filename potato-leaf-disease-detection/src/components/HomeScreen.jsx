import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Camera, Upload } from 'lucide-react-native';
import Navbar from '../components/Navbar';
import globalStyles, { colors, spacing } from '../styles/globalStyles';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={globalStyles.container}>
        <View style={{ flex: 1 }}>
          <View style={globalStyles.cameraContainer}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Capture')}
              style={globalStyles.captureButton}
            >
              <Camera size={32} color={colors.white} />
            </TouchableOpacity>
          </View>
          
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: spacing.md }}>
            <TouchableOpacity 
              style={{ 
                padding: spacing.sm, 
                backgroundColor: colors.primary, 
                borderRadius: 24, 
                marginRight: spacing.sm,
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Upload size={20} color={colors.white} style={{ marginRight: 4 }} />
              <Text style={{ color: colors.white }}>Upload</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={{ 
                padding: spacing.sm, 
                backgroundColor: colors.primary, 
                borderRadius: 24,
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: colors.white }}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      <Navbar navigation={navigation} activeRoute="Home" />
    </SafeAreaView>
  );
};

export default HomeScreen;