# PlecionaWeb - Fishing Product Management Application

**PlecionaWeb** is a full-stack web application designed to manage and display fishing products. The backend is built with **Spring Boot**, and the frontend is developed using **TypeScript**, **HTML**, and **CSS**. The application allows users to add and view fishing products such as rods, nets, and bait.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project serves as an easy-to-use web application for managing fishing products. It uses **Spring Boot** for the backend to handle the data and REST APIs. The frontend, built with **TypeScript**, **HTML**, and **CSS**, provides an interactive user interface that fetches and displays products stored in a database.

### Functionalities:
- View a list of fishing products fetched from the backend.
- Add new products to the inventory.
- Responsive design for both desktop and mobile users.

## Technologies Used

- **Backend**:
    - **Spring Boot** (Java)
    - **Spring Data JPA** (Database interaction)
    - **H2 Database** (In-memory database for development)

- **Frontend**:
    - **TypeScript**
    - **HTML**
    - **CSS**
    - **Fetch API** (To communicate with the backend API)

## Features

- **View Products:** Display a list of products retrieved from the backend API.
- **Add Products:** Form-based UI for adding new products to the backend.
- **Responsive Layout:** Optimized for various screen sizes and devices.

## Installation

Follow the steps below to set up and run the project locally.

### Backend Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/PlecionaWeb.git
    cd PlecionaWeb
    ```

2. Ensure you have **Java** (version 11 or later) and **Maven** installed. You can check by running:
    ```bash
    java -version
    mvn -v
    ```

3. **Build and run the Spring Boot application**:
    ```bash
    mvn spring-boot:run
    ```

   The backend will be available at [http://localhost:8080](http://localhost:8080).

### Frontend Setup

1. **Install Node.js** and **npm** (if not already installed). You can verify this by running:
    ```bash
    node -v
    npm -v
    ```

2. Navigate to the **frontend** folder (if it's separate from the backend):
    ```bash
    cd frontend
    ```

3. **Install dependencies** using npm:
    ```bash
    npm install
    ```

4. **Run the frontend application**:
    ```bash
    npm start
    ```

   The frontend will be available at [http://localhost:5500](http://localhost:5500).

## Usage

1. **View Products:** Open [http://localhost:5500](http://localhost:5500) in your browser. You will see a list of fishing products fetched from the backend.

2. **Add New Products:** Use the provided form to add new products. The data will be sent to the backend API, which will save the product in the database.

## Database

This project uses an **H2 Database** (in-memory) for development purposes. The database stores products and is accessible via the H2 Console.

- To access the **H2 Console**, navigate to [http://localhost:8080/h2-console](http://localhost:8080/h2-console).
- Default connection URL: `jdbc:h2:mem:testdb`

## Contributing

1. **Fork** the repository.
2. Create a **new branch** (`git checkout -b feature-branch`).
3. **Commit** your changes (`git commit -m 'Add feature'`).
4. **Push** to your branch (`git push origin feature-branch`).
5. **Create a pull request** to merge your changes.





---

### How to Add This README to Your Repo:

1. Create a new file named `README.md` in the root of your project directory.
2. Copy the content above and paste it into the `README.md` file.
3. Save and commit the file to your repository:
    ```bash
    git add README.md
    git commit -m "Add README file"
    git push origin main
    ```
