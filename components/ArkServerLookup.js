// ArkServerLookup.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { lightTheme, darkTheme } from './Theme';

// Import map images
import TheCenterImage from '../assets/img/map/TheCenter.png';
import TheIslandImage from '../assets/img/map/The_Island_map_ASA.jpg';
import ScorchedEarthImage from '../assets/img/map/Scorched_Earth_map_ASA.jpg';

const ArkServerLookup = ({ isDarkMode }) => {
  const [serverNumber, setServerNumber] = useState('');
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const battlemetricsToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImQ5MzE4ZmI5YWM1MjEwNTMiLCJpYXQiOjE3MTYwNjc1MTYsIm5iZiI6MTcxNjA2NzUxNiwiaXNzIjoiaHR0cHM6Ly93d3cuYmF0dGxlbWV0cmljcy5jb20iLCJzdWIiOiJ1cm46dXNlcjo2NTc1MTUifQ.8911l9qd2dUGSdPmpkpxSjogwfXLFGjSVTCFZfu75lQ"; 

  const fetchServers = async () => {
    if (serverNumber.length < 4) {
      setError('Please enter a server number with at least 4 characters.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.battlemetrics.com/servers', {
        headers: {
          "Authorization": `Bearer ${battlemetricsToken}`,
        },
        params: {
          "filter[game]": "arksa",
          "filter[search]": serverNumber,
        }
      });

      setServers(response.data.data);
    } catch (error) {
      setError('Failed to fetch server data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getImageForMap = (mapName) => {
    switch (mapName) {
      case 'TheCenter_WP':
        return TheCenterImage;
      case 'TheIsland_WP':
        return TheIslandImage;
      case 'ScorchedEarth_WP':
        return ScorchedEarthImage;
      default:
        return null;
    }
  };

  const getFriendlyMapName = (mapName) => {
    switch (mapName) {
      case 'TheCenter_WP':
        return 'The Center';
      case 'TheIsland_WP':
        return 'The Island';
      case 'ScorchedEarth_WP':
        return 'Scorched Earth';
      default:
        return 'N/A';
    }
  };

  const renderServerItem = ({ item }) => {
    const mapImage = getImageForMap(item.attributes.details?.map);
    const friendlyMapName = getFriendlyMapName(item.attributes.details?.map);

    return (
      <View style={[styles.serverItem, isDarkMode ? styles.serverItemDark : styles.serverItemLight]}>
        <Text style={[styles.serverName, isDarkMode ? styles.serverNameDark : styles.serverNameLight]}>{item.attributes.name}</Text>
        <Text style={isDarkMode ? styles.textDark : styles.textLight}>IP: {item.attributes.ip}</Text>
        <Text style={isDarkMode ? styles.textDark : styles.textLight}>Port: {item.attributes.port}</Text>
        <Text style={isDarkMode ? styles.textDark : styles.textLight}>Players: {item.attributes.players}/{item.attributes.maxPlayers}</Text>
        <Text style={isDarkMode ? styles.textDark : styles.textLight}>Status: {item.attributes.status}</Text>
        <Text style={isDarkMode ? styles.textDark : styles.textLight}>Map: {friendlyMapName}</Text>
        {mapImage && <Image source={mapImage} style={styles.mapImage} />}
      </View>
    );
  };

  const currentStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, currentStyles.container]}>
      <Text style={[styles.header, currentStyles.text]}>Ark Survival Ascended Server Lookup</Text>
      <Text style={[styles.subheader, currentStyles.text]}>Enter a server number to find details about the Ark Survival Ascended servers.</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, currentStyles.input]}
          placeholder="Enter server number"
          placeholderTextColor={isDarkMode ? "#888" : "#aaa"}
          value={serverNumber}
          onChangeText={setServerNumber}
        />
        <Button title="Search" onPress={fetchServers} color={isDarkMode ? '#b36fb3' : '#007bff'} />
      </View>
      {loading && <ActivityIndicator size="large" color={isDarkMode ? "#b36fb3" : "#007bff"} />}
      {error && <Text style={[styles.error, currentStyles.text]}>{error}</Text>}

      <FlatList
        data={servers}
        keyExtractor={(item) => item.id}
        renderItem={renderServerItem}
        style={styles.serverList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  serverList: {
    marginTop: 20,
  },
  serverItem: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  serverItemLight: {
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  serverItemDark: {
    borderColor: '#444',
    backgroundColor: '#1f1f1f',
  },
  serverName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serverNameLight: {
    color: '#333',
  },
  serverNameDark: {
    color: '#e0e0e0',
  },
  textLight: {
    color: '#333',
  },
  textDark: {
    color: '#e0e0e0',
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: 150,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default ArkServerLookup;
