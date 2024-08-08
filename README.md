# Project Documentation

## Overview

This project is a React Native application that includes a simple user authentication system, a product listing page with pagination, and a profile management screen. The application also supports offline functionality.

## Features

### 1. Login Screen
- **Functionality:** Allows users to log in using their email and password.
- **Components:**
  - Email input field
  - Password input field
  - Login button

### 2. Home Screen
- **Functionality:** Displays a list of products with pagination.
- **Components:**
  - Product list including:
    - Product image
    - Product name
    - Product rating
    - Product description
    - Product price
  - Pagination controls
  - Profile icon in the right header bar to navigate to the profile screen

### 3. Profile Screen
- **Functionality:** Allows users to view and update their profile information.
- **Components:**
  - Profile picture
  - Email
  - Username
  - Country
  - City
  - Pincode
  - Update button to save changes
  - Logout button in the right header bar

## Offline Functionality

The application supports offline mode by utilizing `redux-persist` to store user data and preferences locally. This ensures that users can continue to use the application even without an active internet connection.

## Technical Details

- **State Management:** Uses Redux Toolkit with Redux Persist for managing and persisting application state.
- **API Integration:** Utilizes RTK Query for handling API requests and responses.
- **Offline Support:** Enabled through Redux Persist with `AsyncStorage` as the storage engine.

## Setup

1. **Clone the Repository:**
   ```sh
   Copy code
   git clone https://github.com/manish-vasisst103/eConceptual.git
   cd <eConceptual>

2. **Install Dependencies:**
  ```sh
  Copy code
  npm install
  # or
  yarn install
  Run the Application:

3. **Run the Application:**
  ```sh
  Copy code
  npm start
  # or
  yarn start
  Run Tests:


## Author

  **Manish Nagda**