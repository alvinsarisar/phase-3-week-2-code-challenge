# Bot Battlr

Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom-build your own Bot Army! This app allows you to browse through a list of robots, view their details, and enlist them in your army for battle.

## Table of Contents

- [Features](#features)
- [Running the App](#running-the-app)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [License](#license)

## Features

As a user, you can:

- **Browse Bots**: See profiles of all available bots in the `BotCollection` component.
- **Enlist Bots**: Add a bot to your army by clicking on it. The bot will appear in the `YourBotArmy` component. Each bot can be enlisted only once and does not disappear from the `BotCollection`.
- **Release Bots**: Remove a bot from your army by clicking on it. The bot will disappear from the `YourBotArmy` component but will remain in the `BotCollection`.
- **Discharge Bots**: Permanently remove a bot from the army and the backend by clicking the red "x" button. This will delete the bot from the `YourBotArmy` and the database.



### Installation

1. **Clone the Repository**:

        ```bash
         git clone https://github.com/alvinsarisar/phase-3-week-2-code-challenge/.git
         cd battle\ bots/

   Install Dependencies:

     ```bash
        npm install

2.**Set Up the JSON Server**:




         ```  bash

          json-server --watch db.json


## Running the App
Start the development server:

      ```bash

       npm run dev



## Tech Stack
- React: JavaScript library for building user interfaces.
- JSON Server: A simple way to create a REST API for the bot data.
- CSS: Custom styling for a futuristic, robotic look and feel.

## Project Structure
     ```plaintext
 
    battle-bots/
    ├── public/
    │   ├── vite.svg
    │   └── ...
    ├── src/
    |   ├── assets
    │   │   ├── react.svg      
    │   ├── App.jsx
    │   ├── BackgroundVideo.jsx
    │   ├── BotCard.jsx
    │   ├── BotCollection.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   ├── YourBotArmy.jsx
    │   └── ...
    ├── videos
    │   ├── backgroundvideo.mp4
    │   └── ...

    ├── db.json
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── vite.config.js
    └── README.md
## License
This project is licensed under the MIT License .Feel free to add contributions




