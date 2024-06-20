import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { lightTheme, darkTheme } from './Theme';

const kibbleImages = {
  AmarBerry: require('../assets/img/kibble/AmarBerry_Icon.png'),
  BasicDinoEgg: require('../assets/img/kibble/basicdinoegg.png'),
  BasicKibble: require('../assets/img/kibble/basicKibble_Icon_ExSmall.png'),
  Chili: require('../assets/img/kibble/Chili_Icon.png'),
  Chowder: require('../assets/img/kibble/Chowder_Icon.png'),
  Citronal: require('../assets/img/kibble/Citronal_Icon.png'),
  CookedFishMeat: require('../assets/img/kibble/CookedFishMeat_Icon.png'),
  CookedMeat: require('../assets/img/kibble/CookedMeat_Icon.png'),
  ExceptionalDinoEgg: require('../assets/img/kibble/Exceptionaldinoegg.png'),
  ExceptionalKibble: require('../assets/img/kibble/ExceptionalKibble_Icon_ExLarge.png'),
  ExtraordinaryKibble: require('../assets/img/kibble/ExtraordinaryKibble_Icon_Special.png'),
  Fiber: require('../assets/img/kibble/Fiber_Icon.png'),
  Honey: require('../assets/img/kibble/Honey_Icon.png'),
  Jerky: require('../assets/img/kibble/Jerky_Icon.png'),
  Longrass: require('../assets/img/kibble/Longrass_Icon.png'),
  MejoBerry: require('../assets/img/kibble/MejoBerry_Icon.png'),
  PrimeJerky: require('../assets/img/kibble/PrimeJerky_Icon.png'),
  RareFlower: require('../assets/img/kibble/RareFlower_Icon.png'),
  RareMushroom: require('../assets/img/kibble/RareMushroom_Icon.png'),
  RegularDinoEgg: require('../assets/img/kibble/regulardinoegg.png'),
  RegularKibble: require('../assets/img/kibble/regularKibble_Icon_Medium.png'),
  Rockarrot: require('../assets/img/kibble/Rockarrot_Icon.png'),
  Savoroot: require('../assets/img/kibble/Savroot_Icon.png'),
  SimpleDinoEgg: require('../assets/img/kibble/simpledinoegg.png'),
  SimpleKibble: require('../assets/img/kibble/simpleKibble_Icon_Small.png'),
  SuperiorDinoEgg: require('../assets/img/kibble/Superiordinoegg.png'),
  SuperiorKibble: require('../assets/img/kibble/SuperiorKibble_Icon_Large.png'),
  TintoBerry: require('../assets/img/kibble/TintoBerry_Icon.png'),
  TreeSap: require('../assets/img/kibble/TreeSap_Icon.png'),
  Water: require('../assets/img/kibble/Water_Icon.png'),
  WyvernEgg: require('../assets/img/kibble/WyvernEgg2_Icon.png')
};

const kibbles = [
  {
    name: 'Simple Kibble',
    image: kibbleImages.SimpleKibble,
    requirements: `Cooking Stations: Cooking Pot (30sec)
    Crafting Requirements:
    - 1 x Water
    - 5 x Fiber
    - 5 x Mejoberry
    - 2 x Rockarrot
    - 1 x Cooked Fish Meat
    - 1 x Simple Dinosaur Egg`
  },
  {
    name: 'Regular Kibble',
    image: kibbleImages.RegularKibble,
    requirements: `Cooking Stations: Cooking Pot (30sec)
    Crafting Requirements:
    - 1 x Water
    - 5 x Fiber
    - 2 x Savoroot
    - 2 x Longrass
    - 1 x Cooked Meat Jerky
    - 1 x Regular Dinosaur Egg`
  },
  {
    name: 'Superior Kibble',
    image: kibbleImages.SuperiorKibble,
    requirements: `Cooking Stations: Cooking Pot (30sec)
    Crafting Requirements:
    - 1 x Water
    - 5 x Fiber
    - 2 x Citronal
    - 2 x Rare Mushroom
    - 1 x Prime Meat Jerky
    - 1 x Sap
    - 1 x Superior Dinosaur Egg`
  },
  {
    name: 'Exceptional Kibble',
    image: kibbleImages.ExceptionalKibble,
    requirements: `Cooking Stations: Cooking Pot (30sec)
    Crafting Requirements:
    - 1 x Water
    - 5 x Fiber
    - 10 x Mejoberry
    - 1 x Rare Flower
    - 1 x Focal Chili
    - 1 x Exceptional Dinosaur Egg`
  },
  {
    name: 'Extraordinary Kibble',
    image: kibbleImages.ExtraordinaryKibble,
    requirements: `Cooking Stations: Cooking Pot (30sec)
    Crafting Requirements:
    - 1 x Water
    - 5 x Fiber
    - 10 x Mejoberry
    - 1 x Giant Bee Honey
    - 1 x Lazarus Chowder
    - 1 x Fertilized Poison Wyvern Egg`
  }
];

const KibblePage = ({ isDarkMode }) => {
  const [expanded, setExpanded] = useState(null);
  const currentStyles = isDarkMode ? darkTheme : lightTheme;

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <ScrollView style={[styles.container, currentStyles.container]}>
      <Text style={currentStyles.title}>Kibble Recipes</Text>
      
      <Text style={[styles.note, currentStyles.text]}>
        Kibble is also used for imprinting baby dinos. During care, they may want to be hand fed a randomly selected kibble, including any kibble that is not their species' preferred food. For this reason, having as many types of kibble as possible will allow the imprinting rate to increase. Learning an Engram is not necessary to create kibbles and there are no Engrams available for them, instead recipes are found throughout the world. Follow the same instructions as when cooking with a Cooking Pot or Industrial Cooker. In addition to the ingredients listed below, all kibble recipes require a Waterskin with at least 25% water in it (any other Water-container works, but will be completely used up regardless of capacity).
      </Text>

      {kibbles.map((kibble, index) => (
        <TouchableOpacity key={index} onPress={() => toggleExpand(index)}>
          <View style={[styles.kibbleSection, currentStyles.kibbleSection]}>
            <View style={styles.kibbleHeader}>
              <Image source={kibble.image} style={styles.kibbleImage} />
              <Text style={currentStyles.text}>{kibble.name}</Text>
            </View>
            {expanded === index && (
              <Text style={[styles.kibbleDetails, currentStyles.text]}>{kibble.requirements}</Text>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  note: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'justify',
  },
  kibbleSection: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  kibbleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kibbleImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  kibbleDetails: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default KibblePage;