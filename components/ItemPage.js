import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { lightTheme, darkTheme } from './Theme';
import { itemData } from '../assets/item-req';
import itemImages from './itemImages';
import GradientButton from './GradientButton';
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

const ItemPage = ({ isDarkMode, searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const currentStyles = isDarkMode ? darkTheme : lightTheme;
  const navigation = useNavigation();

  const filteredItems = useMemo(() => {
    return itemData
      .filter(Boolean)
      .flatMap(item =>
        Object.entries(item).filter(([key, itemData]) =>
          itemImages[itemData.icon_name] &&
          (selectedCategory === "All Items" || itemData.item_type === selectedCategory) &&
          itemData.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
  }, [selectedCategory, searchQuery]);

  const renderItem = ({ item }) => {
    const [key, itemData] = item;
    return (
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
    );
  };

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
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => item[0] || `item-${index}`}
        contentContainerStyle={currentStyles.sectionList}
        ListHeaderComponent={renderCategorySelector}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
