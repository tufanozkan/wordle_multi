# Wordle Multiplayer Game

This repository contains a multiplayer word-based mobile game developed using React Native for the front end and Node.js with WebSocket for the backend. The project enables two players to engage in a guessing game, where each player inputs a word, and they must attempt to guess each other’s word.

## Project Overview

In this project, a client-server architecture is utilized to support multiple games simultaneously. The game is built with the following key features:

- **Multiplayer Word Guessing Game**: Two players take turns guessing each other's chosen words.
- **React Native Frontend**: Modular, reusable components like Login, Register, InGame, and KelimeSabitsiz manage the game UI and logic.
- **Backend with WebSocket**: A server based on Node.js with WebSocket handles player communication, room management, and game state synchronization.
- **MongoDB Integration**: User data, including login credentials, is securely stored and managed through MongoDB.
- **Cross-Platform Play**: Multiple games can be played at the same time across different sessions.

## Features

- **Login and Register System**: Users can register or log in using their email and password.
- **Real-time Multiplayer**: Players can join rooms and compete in word-guessing games.
- **WebSocket Communication**: Ensures real-time interaction between players.
- **Word Guessing Mechanism**: Players take turns to guess the hidden word until a winner emerges.

## Technologies Used

- **React Native** for the mobile front end.
- **Node.js** with Express and WebSocket for the backend.
- **MongoDB** for database management.
- **Socket.IO** for real-time multiplayer communication.
- **Bcrypt** for hashing passwords.
