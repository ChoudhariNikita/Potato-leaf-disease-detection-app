import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera, Book, MessageSquare, Play, Globe, Phone } from 'lucide-react-native';
import globalStyles, { colors } from '../../styles/globalStyles';

const Navbar = ({ navigation, activeRoute, isLoggedIn }) => {
  const navItems = isLoggedIn
    ? [
        { name: 'Chat', icon: MessageSquare, route: 'Chat' },
        { name: 'Consult', icon: Phone, route: 'Consult' },
      ]
    : [
        { name: 'Capture', icon: Camera, route: 'Capture' },
        { name: 'Info', icon: Book, route: 'Info' },
        { name: 'Chat', icon: MessageSquare, route: 'Chat' },
        { name: 'Learn', icon: Play, route: 'Learn' },
        { name: 'Translate', icon: Globe, route: 'Translate' },
        { name: 'Consult', icon: Phone, route: 'Consult' },
      ];

  return (
    <View style={globalStyles.navbar}>
      <View style={globalStyles.navbarGrid}>
        {navItems.map((item) => {
          const isActive = activeRoute === item.route;
          const IconComponent = item.icon;
          
          return (
            <TouchableOpacity 
              key={item.name}
              onPress={() => {
                if (navigation.navigate && item.route) {
                  try {
                    navigation.navigate(item.route);
                  } catch (error) {
                    console.warn(`Navigation to ${item.route} not implemented yet`);
                  }
                }
              }} 
              style={globalStyles.navbarItem}
            >
              <IconComponent 
                style={[
                  globalStyles.navbarIcon, 
                  isActive && { color: colors.primary }
                ]} 
              />
              <Text style={[
                globalStyles.navbarText,
                isActive && { color: colors.primary }
              ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Navbar;