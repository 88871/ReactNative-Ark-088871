import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { lightTheme, darkTheme } from "./Theme";

const Sidebar = ({ isDarkMode, setMenuOpen, setCurrentTab }) => {
  const currentStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.sidebar, currentStyles.sidebar]}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setCurrentTab("dinolist");
          setMenuOpen(false);
        }}
      >
        <Ionicons name="list" size={24} color={isDarkMode ? "#e0e0e0" : "#333"} />
        <Text style={[styles.menuText, currentStyles.menuText]}>Dino List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setCurrentTab("commands");
          setMenuOpen(false);
        }}
      >
        <Ionicons name="terminal" size={24} color={isDarkMode ? "#e0e0e0" : "#333"} />
        <Text style={[styles.menuText, currentStyles.menuText]}>Commands</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#1f1f1f',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Sidebar;
