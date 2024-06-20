# ArkNative App

![React Native](https://img.shields.io/badge/React%20Native-v0.64.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

ArkNative is a React Native application designed for players of Ark Survival Ascended. The app includes a comprehensive list of in-game commands and dinosaur categories, allowing players to easily search and access relevant information.

## Features
- **Command List:** Access a full list of in-game commands, including detailed descriptions and usage instructions.
- **Dino List:** Browse and search through different dinosaur categories, each with detailed information and images.
- **Server Lookup:** Search for Ark Survival Ascended servers and view detailed information including server status, players, and map.
- **Dark and Light Themes:** Toggle between dark and light themes for better visibility based on your preference.
- **Search Functionality:** Easily search for commands, dinosaurs, or servers using the integrated search bar.
- **Category Filters:** Filter dinosaurs by specific categories such as Healer, Soaker, Damage Dealer, etc.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
   - [Adding Commands](#adding-commands)
   - [Adding Dinosaurs](#adding-dinosaurs)
   - [Server Lookup](#server-lookup)
3. [Contributing](#contributing)
4. [License](#license)
5. [Contact](#contact)
6. [Screenshots](#screenshots)

## Installation

Clone the repository:
```bash
git clone https://github.com/88871/ReactNative-Ark-088871
cd ArkNative
```

Install dependencies:

```bash
npm install
```
Start the application:

```bash
npm start
```
Run the application for iOS:

```bash
npm run ios
```

For Android:

```bash
npm run android
```

## Usage
### Adding Commands
To add new commands, edit the assets/commands.js file. The structure should follow:

```javascript
export const CommandList  = [
  {
    "Command": "AddExperience",
    "CommandDesc": "This command adds experience points to the experience amount of the player who executes it.",
    "CommandID": "cheat AddExperience <Amount> <From Tribe> <Prevent Sharing With Tribe (1 - only you, 2 share tribe)>"
  },
  // ...
];
```

Adding Dinosaurs
To add new dinosaurs, edit the assets/creatures.js file. The structure should follow:

```javascript
export const dinosaurs = [
  {
    "Field1": "Tyrannosaurus Rex",
    "Image": require('./images/rex.png'),
    "Category": "Damage Dealer",
    // ...
  },
  // ...
];
```

Server Lookup
To search for Ark Survival Ascended servers, use the ArkServerLookup component. This feature allows you to enter a server number and fetch detailed information about the server including its status, players, and map.

Example usage in Server Lookup Tool:
Enter Server Number
Get Results For the following Information
- Full server name
- Server IP
- Server Port
- Connected Players
- Server Status
- Map

Contributing
1. Fork the repository.
2. Create a new branch: git checkout -b feature-branch-name.
3. Make your changes and commit them: git commit -m 'Add new feature'.
4. Push to the branch: git push origin feature-branch-name.
5. Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
If you have any questions or suggestions, feel free to reach out at [088871@glr.nl].

## Screenshots:

Light Theme (Dino List)

<img src="https://github.com/88871/ReactNative-Ark-088871/assets/122596760/814b0d06-bdc2-4eff-a98c-feb7e2d6ef38" width="300" height="80%"/>

Dark Theme (Dino List)

<img src="https://github.com/88871/ReactNative-Ark-088871/assets/122596760/7392d9af-f365-4b93-b171-9601e8074ed7" width="300" height="80%"/>

Command List

<img src="https://github.com/88871/ReactNative-Ark-088871/assets/122596760/c292cc14-3996-4a74-b166-f6e45912e4db" width="300" height="80%"/>

Server Lookup

<img src="https://github.com/88871/ReactNative-Ark-088871/assets/122596760/1559dcfb-cd2f-4f26-9ce0-d7e16a6bc3e2" width="300" height="80%"/>
