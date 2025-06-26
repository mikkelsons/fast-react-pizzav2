# Fast React Pizza

This is a modern, responsive web application for ordering pizzas (for a hypothetical pizza restaurant), built with React, React Router, and Redux Toolkit. Users can browse a menu, add pizzas to a cart, manage quantities, and place orders. The app features a clean UI and seamless navigation, making it easy to order your favorite pizzas. This project was built as part of the Udemy course "The Ultimate React Course 2025: React, Next.js, Redux & More" by Jonas Schmedtmann.

## Features

- **Browse Menu**: View a list of available pizzas with details like name, price, and ingredients.
- **Cart Management**: Add, update, or remove pizzas from the cart with real-time updates to quantity and total price.
- **Order Creation**: Place new orders and view order details.
- **Geolocation**: Use geolocation to automatically fetch address details and send a latitude/longitude position to the pizza restaurant API.
- **Order Updates**: Request a priority order after submitting the initial order.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Error Handling**: Displays user-friendly error messages for invalid routes or failed data fetches.
- **State Management**: Uses Redux Toolkit to manage cart and user state efficiently.
- **Dynamic Routing**: Leverages React Router for seamless navigation between pages (Home, Menu, Cart, Order).

## Tech Stack

**React**: Frontend library for building the user interface.
**React Router**: Handles client-side routing for navigation.
**Redux Toolkit**: Manages application state.
**Tailwind CSS**: CSS framework for styling.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mikkelsons/fast-react-pizzav2.git
   cd fast-react-pizzav2
   ```

2. Install dependencies:

   ```bash
    npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
   The app should now be running at http://localhost:5173

## Usage

- **Home Page** A welcome page with navigation to the menu.
- **Menu Page**: Displays available pizzas fetched from an API. Users can add pizzas to the cart.
- **Cart Page**: Shows the user's cart with options to adjust quantities, delete items, or clear the cart. Users can proceed to place an order.
- **Order Page**: Allows users to create a new order or view details of an existing order.
- **Navigation**: Use the "Back to menu" link or buttons to navigate between pages.
- **Cart Overview**: A footer component displays the total quantity and price of items in the cart when not empty.
