# 🥊 UFC Champions Hub

**UFC Champions Hub** is a single-page web application that allows users to explore up-to-date information about current UFC champions across all weight divisions for both men and women. The app provides an intuitive interface for browsing champions, viewing detailed fighter information, and managing champion data through a mock REST API.

This project was built as a front-end focused application to demonstrate data fetching, state updates, and dynamic UI interactions using JavaScript.

---

## ✨ Features

- View all current UFC champions by weight division (Men’s & Women’s)
- Click on a champion card to see detailed fighter information
- Update champion information when data becomes outdated
- Add new champions if new weight divisions are introduced
- Display Top 10 Pound-for-Pound rankings
- View recent UFC title fight promotional videos
- Seamless navigation between pages using a responsive navigation bar

---

## 🧠 Core Concepts Demonstrated

- Single Page Application (SPA) architecture
- Fetching and updating data from a REST-style API
- Client-side state management
- DOM manipulation and event handling
- CRUD operations using a mock backend
- Clean UI structure for data-driven applications

---

## 🛠️ Tech Stack

**Frontend**
- HTML
- CSS
- JavaScript (ES6)

**Mock Backend**
- json-server
- Local `db.json` file acting as a REST API

---

## 📡 Data Handling

- Champion and ranking data is stored in a local `db.json` file generated and served using **json-server**
- Data is retrieved via `fetch` requests and dynamically rendered to the DOM
- Any updates made by the user (such as changing a division champion) persist within the JSON server

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed

### Running the App Locally

1. Install dependencies:
   ```bash
   npm install

2. Start the mock backend server:
   ```bash
   npm run server

3. In a new terminal, start the frontend:
   ```bash
   npm start

## Author
Sitong (Nick) Ren
Frontend / Full-Stack Software Engineer