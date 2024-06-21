import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { lightTheme, darkTheme } from './Theme';
import itemImages from './itemImages'; // Import the generated itemImages
import GradientButton from './GradientButton'; // Import the GradientButton component

const ItemDetails = ({ route }) => {
  const { item, isDarkMode } = route.params; // Retrieve isDarkMode from route params
  const currentStyles = isDarkMode ? darkTheme : lightTheme;
  const navigation = useNavigation();

  return (
    <ScrollView style={currentStyles.container}>
      <View style={[styles.itemDetailsContainer, currentStyles.itemDetailsContainer]}>
        <Image
          source={itemImages[item.icon_name]}
          style={[styles.image, currentStyles.image]}
          resizeMode="contain"
        />
        <Text style={[styles.title, currentStyles.title]}>{item.name}</Text>
        <Text style={[styles.description, currentStyles.text]}>{item.description}</Text>
        <GradientButton
          title="Back"
          onPress={() => navigation.goBack()}
          colors={['#D0A0D0', '#8F508F']}
        />
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
