import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { CommandList } from '../assets/commands'; // Import the commands
import TesterChatIcon from '../assets/TesterChat_Icon.png'; // Import the image
import { lightTheme, darkTheme } from './Theme'; // Ensure to import themes

const CommandsComponent = ({ searchQuery, setSearchQuery, isDarkMode }) => {
  const filteredCommands = CommandList.filter(
    (command) =>
      command.Command.toLowerCase().includes(searchQuery.toLowerCase()) ||
      command.CommandDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      command.CommandID.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, currentStyles.container]}>
      <FlatList
        data={filteredCommands}
        keyExtractor={(item) => item.Command}
        renderItem={({ item }) => (
          <View style={[styles.commandItem, currentStyles.commandItem]}>
            <Image
              source={TesterChatIcon}
              style={styles.icon}
            />
            <View style={styles.textContainer}>
              <Text style={[styles.commandName, currentStyles.text]}>{item.Command}</Text>
              <Text style={[styles.commandDesc, currentStyles.text]}>{item.CommandDesc}</Text>
              <Text style={[styles.commandID, currentStyles.commandID]}>{item.CommandID}</Text>
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
    padding: 20,
  },
  searchInput: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  commandItem: {
    flexDirection: 'row',
    backgroundColor: '#1F1F1F',
    padding: 15,
    marginVertical: 10,
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
  },
  commandDesc: {
    fontSize: 14,
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