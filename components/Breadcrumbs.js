// components/Breadcrumbs.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Breadcrumbs = ({ breadcrumbs }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.breadcrumbContainer}>
      {breadcrumbs.map((crumb, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate(crumb.route)}>
          <Text style={styles.breadcrumbText}>{crumb.label}</Text>
          {index < breadcrumbs.length - 1 && <Text style={styles.separator}> / </Text>}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  breadcrumbContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  breadcrumbText: {
    color: '#007bff',
  },
  separator: {
    color: '#888',
  },
});

export default Breadcrumbs;
