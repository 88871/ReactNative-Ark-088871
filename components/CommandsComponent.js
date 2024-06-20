import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import { CommandList } from '../assets/commands'; // Import the commands
import TesterChatIcon from '../assets/TesterChat_Icon.png'; // Import the image
import { lightTheme, darkTheme } from './Theme'; // Import the themes

const CommandsComponent = ({ isDarkMode, searchQuery }) => {
  const currentStyles = isDarkMode ? darkTheme : lightTheme;

  const filteredCommandList = CommandList.filter(item => {
    if (!item.Command) return false;
    return item.Command.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <View style={currentStyles.container}>
      <FlatList
        data={filteredCommandList}
        keyExtractor={(item) => item.Command}
        renderItem={({ item }) => (
          <View style={styles.commandItem}>
            <Image
              source={TesterChatIcon}
              style={styles.icon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.commandName}>{item.Command}</Text>
              <Text style={styles.commandDesc}>{item.CommandDesc}</Text>
              <Text style={styles.commandID}>{item.CommandID}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  commandItem: {
    flexDirection: 'row',
    backgroundColor: '#1F1F1F',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10, // Add horizontal margin to each command item
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  commandName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  commandDesc: {
    fontSize: 14,
    color: '#AAA',
    marginVertical: 5,
  },
  commandID: {
    fontSize: 16,
    color: '#81C4FD',
    textShadowColor: 'rgba(0, 129, 193, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default CommandsComponent;