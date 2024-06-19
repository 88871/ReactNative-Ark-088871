# ArkNative App

![React Native](https://img.shields.io/badge/React%20Native-v0.64.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

ArkNative is a React Native application designed for players of Ark Survival Ascended. The app includes a comprehensive list of in-game commands and dinosaur categories, allowing players to easily search and access relevant information.

## Features
- **Command List:** Access a full list of in-game commands, including detailed descriptions and usage instructions.
- **Dino List:** Browse and search through different dinosaur categories, each with detailed information and images.
- **Dark and Light Themes:** Toggle between dark and light themes for better visibility based on your preference.
- **Search Functionality:** Easily search for commands or dinosaurs using the integrated search bar.
- **Category Filters:** Filter dinosaurs by specific categories such as Healer, Soaker, Damage Dealer, etc.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
   - [Adding Commands](#adding-commands)
   - [Adding Dinosaurs](#adding-dinosaurs)
3. [Contributing](#contributing)
4. [License](#license)
5. [Contact](#contact)

## Installation

Clone the repository:
```bash
git clone https://github.com/88871/ReactNative-Ark-088871
cd ArkNative
```
```bash
npm install
```
```bash
npm start
```
Run the application For iOS:

```bash
npm run ios
```
For Android:
```bash
npm run android
```
### Usage
Adding Commands
To add new commands, edit the assets/commands.js file. The structure should follow:
```javascript
export const CommandList  = [
  {
    "Command": "AddExperience",
    "CommandDesc": "This command adds experience points to the experience amount of the player who executes it.",
    "CommandID": "cheat AddExperience <Amount> <From Tribe> <Prevent Sharing With Tribe (1 - only you, 2 share tribe)>"
  },
  ...
];
```
### Adding Dinosaurs
To add new dinosaurs, edit the assets/creatures.js file. The structure should follow:
```javascript
export const dinosaurs = [
  {
    "Field1": "Tyrannosaurus Rex",
    "Image": require('./images/rex.png'),
    "Category": "Damage Dealer",
    ...
  },
  ...
];
```

## Contributing
1. Fork the repository.
2. Create a new branch: git checkout -b feature-branch-name.
3. Make your changes and commit them: git commit -m 'Add new feature'.
4. Push to the branch: git push origin feature-branch-name.
5. Open a pull request.
### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Contact
If you have any questions or suggestions, feel free to reach out at [088871@glr.nl].
