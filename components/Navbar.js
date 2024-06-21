import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { lightTheme, darkTheme } from './Theme';

const Navbar = ({ isDarkMode, menuOpen, setMenuOpen, searchQuery, setSearchQuery, toggleTheme }) => {
  const currentStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.navbar, currentStyles.navbar]}>
      <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)} style={styles.menuButton}>
        <Ionicons name="menu" size={24} color={isDarkMode ? '#fff' : '#000'} />
      </TouchableOpacity>
      <TextInput
        style={[styles.searchInput, currentStyles.searchInput]}
        placeholder="Search..."
        placeholderTextColor={isDarkMode ? '#888' : '#555'}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
        <Ionicons 
          name={isDarkMode ? 'moon-outline' : 'sunny-outline'} 
          size={24} 
          color={isDarkMode ? '#b36fb3' : '#121212'} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  menuButton: {
    padding: 5,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  themeButton: {
    padding: 5,
  },
});

export default Navbar;
