// BottomNavbar.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BottomNavbar = () => {
  return (
    <View style={styles.container}>
      <NavItem label="Explore" />
      <NavItem label="Community" />
      <NavItem label="Saved" />
      <NavItem label="Profile" />
    </View>
  );
};

const NavItem = ({ label }) => {
  return (
    <TouchableOpacity style={styles.navItem}>
      <Text style={styles.navLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 14,
  },
});

export default BottomNavbar;
