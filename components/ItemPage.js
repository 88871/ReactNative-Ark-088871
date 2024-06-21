import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { lightTheme, darkTheme } from './Theme';
import { itemData } from '../assets/item-req'; // Assuming the JSON data is exported as default
import itemImages from './itemImages'; // Import the generated itemImages
import GradientButton from './GradientButton'; // Adjust the import path as needed
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get("window").width / 2 - 20;

const categories = [
  { name: "All Items", icon: "apps-outline" },
  { name: "Resource", icon: "leaf-outline" },
  { name: "Misc Consumable", icon: "flask-outline" },
  { name: "Skin", icon: "shirt-outline" },
  { name: "Equipment", icon: "construct-outline" },
  { name: "Miscellaneous", icon: "cube-outline" }
];

const ItemPage = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const currentStyles = isDarkMode ? darkTheme : lightTheme;
  const navigation = useNavigation();

  // Filter out items without images and flatten itemData
  const filteredItems = itemData
    .filter(Boolean) // Filter out any undefined values
    .flatMap(item => 
      Object.entries(item).filter(([key, itemData]) => 
        itemImages[itemData.icon_name] && 
        (selectedCategory === "All Items" || itemData.item_type === selectedCategory)
      )
    ); // Flatten and filter items without images

  const sections = [
    { 
      title: "Items", 
      data: filteredItems
    }
  ];

  const renderItem = ({ item, index }) => {
    const [key, itemData] = item;
    if (index % 2 !== 0) {
      return null; // Only render one item per pair
    }
    const nextItem = sections[0].data[index + 1];
    return (
      <View style={currentStyles.row}>
        <TouchableOpacity
          key={itemData.fullname}
          style={[styles.itemContainer, currentStyles.itemContainer]}
          onPress={() => navigation.navigate('ItemDetails', { item: itemData, isDarkMode })}
        >
          <Image
            source={itemImages[itemData.icon_name]}
            style={currentStyles.image}
            resizeMode="contain"
          />
          <Text style={[styles.text, currentStyles.text]}>{itemData.name}</Text>
        </TouchableOpacity>
        {nextItem && (
          <TouchableOpacity
            key={nextItem[1].fullname}
            style={[styles.itemContainer, currentStyles.itemContainer]}
            onPress={() => navigation.navigate('ItemDetails', { item: nextItem[1], isDarkMode })}
          >
            <Image
              source={itemImages[nextItem[1].icon_name]}
              style={currentStyles.image}
              resizeMode="contain"
            />
            <Text style={[styles.text, currentStyles.text]}>{nextItem[1].name}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={currentStyles.sectionHeaderContainer}>
      <Text style={currentStyles.sectionHeader}>{title}</Text>
    </View>
  );

  const renderCategorySelector = () => (
    <View style={styles.categoryContainer}>
      {categories.map((category) => (
        <GradientButton
          key={category.name}
          title={
            <View style={styles.buttonContent}>
              <Ionicons name={category.icon} size={20} color="#fff" />
              <Text style={styles.buttonText}>{category.name}</Text>
            </View>
          }
          onPress={() => setSelectedCategory(category.name)}
          colors={selectedCategory === category.name ? ['#D0A0D0', '#8F508F'] : ['#8F508F', '#8F508F', '#8F508F']}
        />
      ))}
    </View>
  );

  return (
    <View style={currentStyles.container}>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item[0] || `item-${index}`}
        contentContainerStyle={currentStyles.sectionList}
        ListHeaderComponent={renderCategorySelector}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeaderContainer: {
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 5,
  },
});

export default ItemPage;
