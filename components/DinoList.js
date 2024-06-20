// DinoList.js
import React, { useState } from "react";
import { View, Text, SectionList, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { lightTheme, darkTheme } from "./Theme";
import GradientButton from '../components/GradientButton'; // Adjust the import path as needed

const screenWidth = Dimensions.get("window").width / 2 - 20;

const icons = {
  "All Dinos": "apps-outline",
  Healer: "pulse-outline",
  Soaker: "shield-outline",
  "Damage Dealer": "flash-outline",
  Supporter: "hand-left-outline",
  Farmer: "leaf-outline",
  "Taming & Breeding": "heart-outline",
  Water: "water-outline",
  "Shoulder Pets": "paw-outline",
  Climber: "trending-up-outline",
  Flyer: "airplane-outline",
  Misc: "ellipsis-horizontal-outline",
};

const categories = ["All Dinos", "Healer", "Soaker", "Damage Dealer", "Supporter", "Farmer", "Taming & Breeding", "Water", "Shoulder Pets", "Climber", "Flyer", "Misc"];

const DinoList = ({ sections, isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Dinos");
  const currentStyles = isDarkMode ? darkTheme : lightTheme;

  const filteredSections = selectedCategory === "All Dinos"
    ? sections
    : sections.map((section) => ({
        ...section,
        data: section.data.map((row) =>
          row.filter((item) => item.Category === selectedCategory)
        ).filter((row) => row.length > 0),
      })).filter((section) => section.data.length > 0);

  const renderItem = ({ item }) => (
    <View style={currentStyles.row}>
      {item.map((dino) => {
        if (dino.empty) {
          return <View style={[currentStyles.itemContainer, currentStyles.itemInvisible]} key={dino.key} />;
        }
        return (
          <View style={currentStyles.itemContainer} key={dino.Field1}>
            <Image source={dino.Image} style={currentStyles.image} resizeMode="contain" />
            <Text style={currentStyles.text}>{dino.Field1}</Text>
          </View>
        );
      })}
    </View>
  );

  const renderSectionHeader = ({ section: { title, description } }) => (
    <View style={currentStyles.sectionHeaderContainer}>
      <View style={styles.sectionHeaderIconContainer}>
        <Ionicons name={icons[title]} size={24} color={isDarkMode ? "#e0e0e0" : "#333"} style={styles.sectionHeaderIcon} />
        <Text style={currentStyles.sectionHeader}>{title}</Text>
      </View>
      <Text style={currentStyles.sectionDescription}>{description}</Text>
    </View>
  );

  return (
    <View style={currentStyles.container}>
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <GradientButton
            key={category}
            title={
              <View style={styles.buttonContent}>
                <Ionicons name={icons[category]} size={16} color="#fff" />
                <Text style={styles.buttonText}>{category}</Text>
              </View>
            }
            onPress={() => setSelectedCategory(category)}
            colors={selectedCategory === category ? ['#D0A0D0', '#8F508F'] : ['#8F508F', '#8F508F', '#8F508F']}
          />
        ))}
      </View>
      <SectionList
        sections={filteredSections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item[0]?.Field1 || `section-${index}`}
        contentContainerStyle={currentStyles.sectionList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeaderIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionHeaderIcon: {
    marginRight: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: '#fff',
    marginLeft: 5,
  },
});

export default DinoList;
