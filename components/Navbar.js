import React from "react";
import { View, Text, TextInput, Switch, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { lightTheme, darkTheme } from "./Theme";

const Navbar = ({ isDarkMode, setIsDarkMode, searchQuery, setSearchQuery, setMenuOpen }) => {
  const currentStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={currentStyles.navbar}>
      <TouchableOpacity
        style={currentStyles.menuButton}
        onPress={() => setMenuOpen(true)}
      >
        <Ionicons name="menu" size={28} color={isDarkMode ? "#e0e0e0" : "#333"} />
      </TouchableOpacity>
      <TextInput
        style={currentStyles.searchInput}
        placeholder="Search..."
        placeholderTextColor={isDarkMode ? "#888" : "#aaa"}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={currentStyles.switchContainer}>
        <Text style={currentStyles.switchLabel}>
          {isDarkMode ? "🌙" : "☀️"}
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
        />
      </View>
    </View>
  );
};

export default Navbar;
