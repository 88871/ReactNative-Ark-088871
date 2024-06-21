// components/ItemDetails.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { lightTheme, darkTheme } from './Theme';
import itemImages from './itemImages';
import Breadcrumbs from './Breadcrumbs';

const ItemDetails = ({ route }) => {
  const { item, isDarkMode } = route.params;
  const currentStyles = isDarkMode ? darkTheme : lightTheme;

  const breadcrumbs = [
    { label: 'Home', route: 'Home' },
    { label: 'Items', route: 'ItemPage' },
    { label: item.name, route: 'ItemDetails' },
  ];

  return (
    <ScrollView style={currentStyles.container}>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <View style={[styles.itemDetailsContainer, currentStyles.itemDetailsContainer]}>
        <Image
          source={itemImages[item.icon_name]}
          style={[styles.image, currentStyles.image]}
          resizeMode="contain"
        />
        <Text style={[styles.title, currentStyles.title]}>{item.name}</Text>
        <Text style={[styles.description, currentStyles.text]}>{item.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemDetailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});

export default ItemDetails;
