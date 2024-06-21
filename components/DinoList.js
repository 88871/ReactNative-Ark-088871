import React, { useRef, useState } from "react";
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
  const listRef = useRef(null);

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
          <View style={[currentStyles.itemContainer, styles.shadow]} key={dino.Field1}>
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

  const renderCategorySelector = () => (
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
  );

  const scrollToTop = () => {
    if (listRef.current) {
      listRef.current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true });
    }
  };

  return (
    <View style={currentStyles.container}>
      <SectionList
        ref={listRef}
        sections={filteredSections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item[0]?.Field1 || `section-${index}`}
        contentContainerStyle={currentStyles.sectionList}
        stickySectionHeadersEnabled={false}
        ListHeaderComponent={renderCategorySelector}
      />
      <TouchableOpacity style={styles.fab} onPress={scrollToTop}>
        <Ionicons name="arrow-up-circle" size={56} color="#8F508F" />
      </TouchableOpacity>
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
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'transparent',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.03,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default DinoList;
