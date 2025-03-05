import React from 'react';
import { View, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { Camera, Upload } from 'lucide-react-native';
import globalStyles, { colors, spacing } from '../styles/globalStyles';
import Navbar from '../components/Navbar';

const CaptureScreen = ({ navigation }) => {
  const handleCapture = () => {
    // In a real app, this would trigger the camera capture
    // And then navigate to a results screen
    alert('Image captured! This would analyze the leaf in a real app.');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[globalStyles.centeredContainer, { padding: spacing.md }]}>
        <Text style={[globalStyles.title, { marginBottom: spacing.xl }]}>
          Capture Plant Leaf
        </Text>
        
        <TouchableOpacity 
          onPress={handleCapture}
          style={{
            width: 72,
            height: 72,
            borderRadius: 36,
            backgroundColor: colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginBottom: spacing.xl,
            elevation: 4,
          }}
        >
          <Camera size={32} color={colors.white} />
        </TouchableOpacity>
        
        <Text style={[globalStyles.subtitle, { marginTop: spacing.lg }]}>
          Position the leaf in the center of the frame and tap the button to capture
        </Text>
        
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: spacing.lg }}>
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
      
      <Navbar navigation={navigation} activeRoute="Capture" />
    </SafeAreaView>
  );
};

export default CaptureScreen;