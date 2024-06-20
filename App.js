import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { categorizeDinosaurs } from "./components/utils";
import Navbar from "./components/Navbar";
import DinoList from "./components/DinoList";
import Sidebar from "./components/Sidebar";
import { lightTheme, darkTheme } from "./components/Theme";
import { dinosaurs } from "./assets/creatures";
import CommandsComponent from "./components/CommandsComponent";
import ArkServerLookup from "./components/ArkServerLookup"; // Import the new component

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("dinolist");
  const sections = categorizeDinosaurs(dinosaurs);

  const filteredSections = sections
    .map((section) => ({
      ...section,
      data: section.data.map((row) =>
        row.filter(
          (item) =>
            item.Field1 &&
            item.Field1.toLowerCase().includes(searchQuery.toLowerCase())
        )
      ),
    }))
    .map((section) => ({
      ...section,
      data: section.data.filter((row) => row.length > 0),
    }))
    .filter((section) => section.data.length > 0);

  const currentStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, currentStyles.container]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuOpen}
        onRequestClose={() => setMenuOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <Sidebar
            isDarkMode={isDarkMode}
            setMenuOpen={setMenuOpen}
            setCurrentTab={setCurrentTab}
          />
          <TouchableOpacity
            style={styles.modalBackdrop}
            onPress={() => setMenuOpen(false)}
          />
        </View>
      </Modal>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setMenuOpen={setMenuOpen}
      />
      {currentTab === "dinolist" && (
        <DinoList sections={filteredSections} isDarkMode={isDarkMode} />
      )}
      {currentTab === "commands" && (
        <CommandsComponent searchQuery={searchQuery} isDarkMode={isDarkMode} />
      )}
      {currentTab === "arklookup" && (
        <ArkServerLookup isDarkMode={isDarkMode} />
      )}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    flexDirection: "row",
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
