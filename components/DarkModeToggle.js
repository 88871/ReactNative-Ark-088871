// components/DarkModeToggle.js
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DarkModeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
      <Ionicons
        name={isDarkMode ? 'moon' : 'sunny'}
        size={24}
        color={isDarkMode ? '#b36fb3' : '#121212'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    padding: 5,
  },
});

export default DarkModeToggle;
