import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Sidebar = ({ isDarkMode, setMenuOpen, setCurrentTab }) => {
  const menuItems = [
    { name: "Dino List", icon: "paw-outline", tab: "dinolist", color: "#FF5733" },
    { name: "Commands", icon: "terminal-outline", tab: "commands", color: "#33FF57" },
    { name: "Ark Servers", icon: "server-outline", tab: "arklookup", color: "#3357FF" },
    { name: "Tek Generator", icon: "nuclear-outline", tab: "tekcalc", color: "#FF33A6" }, // Add this line
    { name: "Kibble", icon: "fast-food-outline", tab: "kibble", color: "#FF33A6" }, // Add this line
  ];

  return (
    <View style={[styles.sidebar, isDarkMode ? styles.sidebarDark : styles.sidebarLight]}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.menuItem, { borderColor: item.color }]}
          onPress={() => {
            setCurrentTab(item.tab);
            setMenuOpen(false);
          }}
        >
          <Ionicons name={item.icon} size={24} style={[styles.icon, { color: item.color }]} />
          <Text style={[styles.menuItemText, { color: item.color }]}>
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
    borderBottomWidth: 1,
  },
  menuItemText: {
    fontSize: 18,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default Sidebar;
