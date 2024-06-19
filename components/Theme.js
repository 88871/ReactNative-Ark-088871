import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width / 2 - 20;

export const lightTheme = {
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
  title: {
    fontSize: 26, // Increased font size
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  sectionList: {
    paddingHorizontal: 10,
  },
  sectionHeaderContainer: {
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  sectionHeader: {
    fontSize: 22, // Increased font size
    fontWeight: 'bold',
    color: '#333',
  },
  sectionDescription: {
    fontSize: 16, // Increased font size
    color: '#990099', // Darker purple for descriptions
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    width: screenWidth,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    elevation: 1,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  text: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 110,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 18,
    marginRight: 10,
    color: '#333',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginRight: 10,
    fontSize: 18, // Increased font size
  },
  menuButton: {
    padding: 5,
  },
  input: {
    backgroundColor: '#fff',
    color: '#333',
    width: '80%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18, // Increased font size
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Increased font size
  },
  resultItem: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  resultText: {
    color: '#333',
    fontSize: 18, // Increased font size
  },
  purpleText: {
    color: '#C726DF',
  },
  purpleHeader: {
    color: '#d16ee0',
    fontWeight: 'bold',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',
    marginVertical: 10,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    height: 50,
    color: '#333',
  },
  sidebar: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 20, // Increased font size
  },
};

export const darkTheme = {
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
  title: {
    fontSize: 26, // Increased font size
    textAlign: 'center',
    marginBottom: 20,
    color: '#e0e0e0',
  },
  sectionList: {
    paddingHorizontal: 10,
  },
  sectionHeaderContainer: {
    paddingVertical: 10,
    backgroundColor: '#1f1f1f',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  sectionHeader: {
    fontSize: 22, // Increased font size
    fontWeight: 'bold',
    color: '#e0e0e0',
  },
  sectionDescription: {
    fontSize: 16, // Increased font size
    color: '#b36fb3', // Lighter purple for descriptions
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    width: screenWidth,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 110,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 18,
    marginRight: 10,
    color: '#e0e0e0',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    marginRight: 10,
    color: '#e0e0e0',
    fontSize: 18, // Increased font size
  },
  menuButton: {
    padding: 5,
  },
  input: {
    backgroundColor: '#333',
    color: '#e0e0e0',
    width: '80%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18, // Increased font size
  },
  button: {
    backgroundColor: '#C726DF',
    padding: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Increased font size
  },
  resultItem: {
    backgroundColor: '#444',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  resultText: {
    color: '#C726DF',
    fontSize: 18, // Increased font size
  },
  purpleText: {
    color: '#C726DF',
  },
  purpleHeader: {
    color: '#C726DF',
    fontWeight: 'bold',
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    width: '80%',
    marginVertical: 10,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    height: 50,
    color: '#e0e0e0',
  },
  sidebar: {
    backgroundColor: '#1f1f1f',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 20, // Increased font size
  },
};
