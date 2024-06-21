import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { lightTheme, darkTheme } from "./Theme";

import GeneratorIcon from "../assets/img/GenCalc/TEKGenerator_Icon.png";
import ElementIcon from "../assets/img/GenCalc/TEKElement_Icon.png";
import ShardIcon from "../assets/img/GenCalc/TEKElementShard_Icon.png";
import RadiusIcon from "../assets/img/GenCalc/radius.png";

const TekGeneratorCalculator = ({ isDarkMode }) => {
  const [fuelType, setFuelType] = useState("Element");
  const [fuelAmount, setFuelAmount] = useState("");
  const [radius, setRadius] = useState("");
  const [result, setResult] = useState("");

  const calculateRuntime = () => {
    if (!fuelAmount || !radius) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    const baseConsumptionPer18Hours = 1; // base consumption of 1 element per 18 hours at radius 1.0
    const radiusFactor = 1 + 0.33 * (radius - 1); // consumption increases by 0.33 per additional unit of radius
    const fuelUnits = fuelType === "Element" ? Number(fuelAmount) : Number(fuelAmount) / 100;
    const consumptionPer18Hours = baseConsumptionPer18Hours * radiusFactor;
    const totalDurationInHours = (fuelUnits / consumptionPer18Hours) * 18;

    const days = Math.floor(totalDurationInHours / 24);
    const hours = Math.floor(totalDurationInHours % 24);
    const minutes = Math.floor(((totalDurationInHours % 24) - hours) * 60);

    setResult(`${days} days ${hours} hours ${minutes} minutes`);
  };

  const currentStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={styles.background}>
      <View style={[styles.container, currentStyles.container]}>
        <Image source={GeneratorIcon} style={styles.generatorIcon} />
        <Text style={currentStyles.title}>Tek Generator Consumption Calculator</Text>

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={[styles.fuelTypeButton, fuelType === "Element" ? styles.selectedButton : null]}
            onPress={() => setFuelType("Element")}
          >
            <Text style={styles.fuelTypeText}>Element</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.fuelTypeButton, fuelType === "Shards" ? styles.selectedButton : null]}
            onPress={() => setFuelType("Shards")}
          >
            <Text style={styles.fuelTypeText}>Shards</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Image source={fuelType === "Element" ? ElementIcon : ShardIcon} style={styles.icon} />
          <TextInput
            style={[styles.input, currentStyles.input]}
            placeholder="Enter fuel amount"
            keyboardType="numeric"
            value={fuelAmount}
            onChangeText={setFuelAmount}
            placeholderTextColor={isDarkMode ? "#888" : "#aaa"}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={RadiusIcon} style={styles.icon} />
          <TextInput
            style={[styles.input, currentStyles.input]}
            placeholder="Enter radius"
            keyboardType="numeric"
            value={radius}
            onChangeText={setRadius}
            placeholderTextColor={isDarkMode ? "#888" : "#aaa"}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Calculate" onPress={calculateRuntime} color={isDarkMode ? "#C726DF" : "#007bff"} />
        </View>

        {result ? (
          <Text style={[styles.result, currentStyles.text]}>Total Runtime: {result}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#C726DF',
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  generatorIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
  },
  buttonContainer: {
    marginTop: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  fuelTypeButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#C726DF',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: '#C726DF',
  },
  fuelTypeText: {
    color: '#fff',
  },
});

export default TekGeneratorCalculator;
