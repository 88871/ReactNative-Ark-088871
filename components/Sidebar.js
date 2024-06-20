import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Sidebar = ({ isDarkMode, setMenuOpen, setCurrentTab }) => {
  const menuItems = [
    { name: "Dino List", icon: "paw-outline", tab: "dinolist" },
    { name: "Commands", icon: "terminal-outline", tab: "commands" },
    { name: "Ark Servers", icon: "server-outline", tab: "arklookup" },
  ];

  return (
    <View style={[styles.sidebar, isDarkMode ? styles.sidebarDark : styles.sidebarLight]}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => {
            setCurrentTab(item.tab);
            setMenuOpen(false);
          }}
        >
          <Ionicons name={item.icon} size={24} style={[styles.icon, isDarkMode ? styles.iconDark : styles.iconLight]} />
          <Text style={[styles.menuItemText, isDarkMode ? styles.menuItemTextDark : styles.menuItemTextLight]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    padding: 20,
  },
  sidebarLight: {
    backgroundColor: "#fff",
  },
  sidebarDark: {
    backgroundColor: "#121212",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  menuItemText: {
    fontSize: 18,
    marginLeft: 10,
  },
  menuItemTextLight: {
    color: "#333",
  },
  menuItemTextDark: {
    color: "#e0e0e0",
  },
  icon: {
    color: "#333",
  },
  iconLight: {
    color: "#333",
  },
  iconDark: {
    color: "#e0e0e0",
  },
});

export default Sidebar;
