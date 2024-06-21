import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Animated, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { categorizeDinosaurs } from "./components/utils";
import Navbar from "./components/Navbar";
import DinoList from "./components/DinoList";
import Sidebar from "./components/Sidebar";
import { lightTheme, darkTheme } from "./components/Theme";
import { dinosaurs } from "./assets/creatures";
import CommandsComponent from "./components/CommandsComponent";
import ArkServerLookup from "./components/ArkServerLookup";
import TekGeneratorCalculator from "./components/TekGeneratorCalculator";
import KibblePage from "./components/KibblePage";
import ItemPage from "./components/ItemPage";
import ItemDetails from "./components/ItemDetails";

const Stack = createStackNavigator();

const HomeScreen = ({ isDarkMode, currentTab, searchQuery, setSearchQuery, setMenuOpen }) => {
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

  return (
    <>
      {currentTab === "dinolist" && (
        <DinoList sections={filteredSections} isDarkMode={isDarkMode} />
      )}
      {currentTab === "commands" && (
        <CommandsComponent searchQuery={searchQuery} isDarkMode={isDarkMode} />
      )}
      {currentTab === "arklookup" && (
        <ArkServerLookup isDarkMode={isDarkMode} />
      )}
      {currentTab === "tekcalc" && (
        <TekGeneratorCalculator isDarkMode={isDarkMode} />
      )}
      {currentTab === "kibble" && (
        <KibblePage isDarkMode={isDarkMode} />
      )}
      {currentTab === "items" && (
        <ItemPage searchQuery={searchQuery} isDarkMode={isDarkMode} />
      )}
    </>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("dinolist");
  const animation = useRef(new Animated.Value(-250)).current;
  const navigationRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: -250,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [menuOpen]);

  useEffect(() => {
    if (currentTab !== "dinolist") {
      navigationRef.current?.navigate("Home");
    }
  }, [currentTab]);

  const currentStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={[styles.container, currentStyles.container]}>
        {menuOpen && <TouchableOpacity style={styles.modalBackdrop} onPress={() => setMenuOpen(false)} />}
        <Animated.View style={[styles.sidebarContainer, { transform: [{ translateX: animation }] }]}>
          <Sidebar
            isDarkMode={isDarkMode}
            setMenuOpen={setMenuOpen}
            setCurrentTab={setCurrentTab}
          />
        </Animated.View>
        <Navbar
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setMenuOpen={setMenuOpen}
          toggleTheme={() => setIsDarkMode(prevMode => !prevMode)}
        />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home">
            {props => (
              <HomeScreen
                {...props}
                isDarkMode={isDarkMode}
                currentTab={currentTab}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setMenuOpen={setMenuOpen}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="ItemDetails">
            {props => <ItemDetails {...props} isDarkMode={isDarkMode} />}
          </Stack.Screen>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sidebarContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 250,
    zIndex: 1000,
    backgroundColor: "#121212",
  },
  modalBackdrop: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  },
});
