# ArkNative App
ArkNative is a React Native application designed for players of Ark Survival Ascended. The app includes a comprehensive list of in-game commands and dinosaur categories, allowing players to easily search and access relevant information.

Features
Command List: Access a full list of in-game commands, including detailed descriptions and usage instructions.
Dino List: Browse and search through different dinosaur categories, each with detailed information and images.
Dark and Light Themes: Toggle between dark and light themes for better visibility based on your preference.
Search Functionality: Easily search for commands or dinosaurs using the integrated search bar.
Category Filters: Filter dinosaurs by specific categories such as Healer, Soaker, Damage Dealer, etc.

## Installation
Clone the repository:

bash
Copy code
git clone https://github.com/88871/ReactNative-Ark-088871
cd ArkNative
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Run the application:

For iOS:
bash
Copy code
npm run ios
For Android:
bash
Copy code
npm run android


## Usage
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
Adding Dinosaurs
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
Contributing
Fork the repository.
Create a new branch: git checkout -b feature-branch-name.
Make your changes and commit them: git commit -m 'Add new feature'.
Push to the branch: git push origin feature-branch-name.
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
If you have any questions or suggestions, feel free to reach out at [088871@glr.nl].
