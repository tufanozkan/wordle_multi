# Wordle Multiplayer Game

Welcome to **Wordle Multiplayer Game**, an advanced and interactive word-guessing challenge crafted for modern mobile platforms! This project combines cutting-edge technologies and dynamic gameplay to deliver an engaging experience where players test their wits in real-time.

## Project Overview

The **Wordle Multiplayer Game** is designed to offer a seamless and immersive multiplayer experience. Built with a robust client-server architecture, the game allows two players to compete in a thrilling guessing contest. Key features of this project include:

- **Real-Time Multiplayer Gameplay**: Engage in head-to-head word guessing battles with friends or opponents. Each player selects a word, and the challenge is to guess each other’s word within the allotted turns.
- **Sophisticated React Native Frontend**: The mobile application is developed with React Native, featuring a modular design with components such as Login, Register, InGame, and KelimeSabitsiz. This ensures a smooth, responsive, and scalable user interface.
- **Dynamic Backend with WebSocket**: The server, built with Node.js and WebSocket, orchestrates real-time player interactions, room management, and game state synchronization, ensuring a fluid and synchronized gameplay experience.
- **Secure MongoDB Integration**: Player data, including authentication credentials and game statistics, is securely managed and stored using MongoDB, providing a robust data management solution.
- **Cross-Platform Connectivity**: Play and compete across various sessions with support for multiple concurrent games.

## Key Features

- **User Authentication**: Secure login and registration system using email and password, with encrypted password storage via Bcrypt.
- **Real-Time Interaction**: Powered by Socket.IO, experience instant communication and updates during gameplay, ensuring a responsive and interactive environment.
- **Word Guessing Mechanism**: A competitive and strategic guessing system where players take turns to uncover the mystery word, enhancing the fun and challenge of the game.
- **Room Management**: Efficiently manage game rooms and player sessions, allowing for a seamless matchmaking and game start process.

## Technologies Used

- **React Native**: For a high-performance, cross-platform mobile application, delivering a native-like experience on both iOS and Android.
- **Node.js**: Utilized with Express for a powerful and scalable backend solution, handling game logic and server-side operations.
- **WebSocket**: Employed for real-time communication, enabling instantaneous updates and interactions between players.
- **Socket.IO**: Facilitates real-time, bidirectional communication for multiplayer functionality, enhancing the gameplay experience.
- **MongoDB**: For secure and efficient database management, handling user data and game information.
- **Bcrypt**: Ensures secure password hashing, protecting user credentials and enhancing overall security.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/wordle-multiplayer-game.git
   cd wordle-multiplayer-game
2. **Setup Frontend: Navigate to the client directory and install dependencies**:
    ```bash
    cd client
    npm install
3. **Setup Backend: Navigate to the server directory and install dependencies**:
   ```bash
    cd server
    npm install
4. **Run the Application: Start the backend server**:
   ```bash
    cd server
    npm start
5. **Then, start the React Native client**:
   ```bash
    cd client
    npm start
