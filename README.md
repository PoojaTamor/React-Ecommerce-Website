# E-commerce Website

## Project Overview

### Project Title
**E-commerce Website**

### Description
The project is an e-commerce platform developed using React. It includes features such as a Navbar, Banner, Home page, product cards for different categories (tops, dresses, trousers), a detailed product page, and a shopping cart functionality.

### Objectives
- To create a user-friendly interface for browsing and purchasing products.
- To implement efficient state management for cart operations.
- To provide detailed views of products with multiple images.
- To ensure responsiveness and accessibility across devices.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.
- **CSS**: For styling the components.
- **Bootstrap**: For responsive design and pre-built components.
- **React Hot Toast**: For notifications.
- **BrowserRouter**: For client-side routing.
- **Tippy.js**:  For tooltips and popovers..

## Components

### 1. Navbar Component
- **Description**: The Navbar component includes navigation links, a cart icon with item count, and responsive elements for mobile view.
- **Props**:
  - `addcart`: Array of items in the cart.
  - `count`: Number of items in the cart.
  - `QuntityHandler`: Function to handle quantity changes of items in the cart.
  - `handleDelete`: Function to delete items from the cart.
- **Key Features**:
  - Navigation links to Home, About, Shop, and Contact pages.
  - Cart icon that displays the number of items in the cart.
  - Modal for displaying cart items and their subtotal.

### 2. Banner Component
- **Description**: The Banner component displays a promotional banner and categories for quick navigation.
- **Key Features**:
  - Clickable buttons to navigate to different product categories (Tops, Trousers, Dresses).

### 3. Home Component
- **Description**: The Home component serves as the landing page, featuring the Banner and product cards.
- **Props**:
  - `handleAddToCart`: Function to add items to the cart.
  - `ProductShow`: Function to display product details.

### 4. GirlsTopCards, GirlsDressCard, and GirlsTrousersCard Components
- **Description**: These components display product cards for different categories.
- **Props**:
  - `handleAddToCart`: Function to add items to the cart.
  - `ProductShow`: Function to display product details.
- **Key Features**:
  - Display products with images, names, prices, and rating stars.
  - Buttons to add items to the cart and view product details.

### 5. ProductDetailePage Component
- **Description**: The ProductDetailePage component displays detailed information about a selected product.
- **Props**:
  - `ProductD`: Array containing the details of the selected product.
  - `handleAddToCart`: Function to add the product to the cart.
  - `QuntityHandler`: Function to handle quantity changes.
- **Key Features**:
  - Display product images, name, price, and detailed description.
  - Buttons to adjust the quantity and add the product to the cart.


### 6.SearchResults Component
- **Description**: The SearchResults component displays the search results based on the search query.
- **Props**:
-`items`: Array of filtered items based on the search query.
-`handleAddToCart`: Function to add items to the cart.
-`ProductShow`: Function to display product details.
- **Key Features**:
-Display filtered products with images, names, prices, and rating stars.
-Message and button to search again if no results are found.


### 7. App Component
- **Description**: The App component is the main entry point of the application. It manages the state and routing of the application.
- **Key Features**:
  - Maintains the state for cart items and added items.
  - Handles routing between different pages using React Router.

## Implementation Details

### State Management
- **useState**: Used for managing the state of the cart, quantity, and added items.
- **useEffect**: Used for calculating the subtotal whenever the cart items change.

### Routing
- **React Router**: Used to handle navigation between different pages (Home, Tops, Trousers, Dresses, Product Details).

### Cart Functionality
- **Adding to Cart**: Products can be added to the cart, and duplicate entries are prevented.
- **Quantity Management**: Users can increase or decrease the quantity of items in the cart.
- **Subtotal Calculation**: The subtotal is dynamically calculated based on the items and their quantities in the cart.
- **Deletion**: Items can be removed from the cart.

### Styling
- **CSS**: Custom styles for various components.
- **Bootstrap**: Used for responsive design and pre-built components.

### Notifications
- **React Hot Toast**: Provides feedback to users when they try to add duplicate items to the cart.
### Tooltips
-**Tippy**.js: Used for displaying tooltips and popovers.
-**Import**: import Tippy from '@tippyjs/react';
-**CSS**: import 'tippy.js/dist/tippy.css';
## State Variables

### `addcart` and `setAddCart`
- **Purpose**: This state holds the list of items that have been added to the shopping cart.
- **Initialization**: It is initialized as an empty array, indicating that the cart is empty initially.
- **Usage**: The `setAddCart` function is used to update the state when items are added to or removed from the cart.

### `addedItems` and `setAddedItems`
- **Purpose**: This state keeps track of the IDs of items that have been added to the cart to prevent duplicate additions.
- **Initialization**: It is initialized as an empty array.
- **Usage**: The `setAddedItems` function updates this state whenever a new item is added to ensure no duplicates are added.

### `ProDetail` and `setproDetail`
- **Purpose**: This state holds the details of a selected product to display on the product detail page.
- **Initialization**: It is initialized as an empty array.
- **Usage**: The `setproDetail` function updates this state with the details of the selected product.

### `searchQuery` and `setSearchQuery`
- **Purpose**: This state holds the current value of the search input field.
- **Initialization**: It is initialized as an empty string.
-**Usage**: The `setSearchQuery` function updates this state as the user types in the search bar.

### `filteredItems` and `setFilteredItems`
- **Purpose**: This state holds the list of products that match the search input.
- **Initialization**: It is initialized as an empty array.
- **Usage**: The setFilteredItems function updates this state with the filtered products based on the search input.  

## Functions

### `addToCart`
- **Purpose**: Adds a new item to the cart.
- **Parameters**: `data` (the item to be added).
- **Implementation**: It uses the `setAddCart` function to update the `addcart` state with the new item.

### `handleAddToCart`
- **Purpose**: Handles the addition of items to the cart, ensuring no duplicates.
- **Parameters**: `item` (the item to be added).
- **Implementation**:
  - Checks if the item's ID already exists in the `addedItems` state.
  - If the item is already in the cart, it shows an error message using `toast.error`.
  - If the item is not in the cart, it calls `addToCart` to add the item and updates the `addedItems` state with the new item's ID.

### `QuntityHandler`
- **Purpose**: Adjusts the quantity of a specific item in the cart.
- **Parameters**: `item` (the item whose quantity is being adjusted), `value` (the value to adjust the quantity by, e.g., +1 or -1).
- **Implementation**:
  - Maps through the `addcart` state to find the item.
  - Adjusts the quantity by the given value, ensuring it stays within the range of 1 to 10.
  - Updates the `addcart` state with the new quantities.

### `handleDelete`
- **Purpose**: Removes an item from the cart based on its index.
- **Parameters**: `index` (the index of the item to be removed).
- **Implementation**:
 - Creates a copy of the `addcart` state.
 - Removes the item at the given index using `splice`.
 - Updates the `addcart` state with the new list.

### `ProductShow`
- **Purpose**: Displays the details of a selected product.
- **Parameters**: `item` (the item whose details are to be displayed).
- **Implementation**: Updates the `ProDetail` state with the details of the selected product.

### `handleSearchChange`
-**Purpose**: Filters the product list based on the search input.
-**Parameters**: event (the input change event).
-**Implementation**:Updates the searchQuery state with the current value of the input field.

## Rendering and Routing
The `App` component uses `BrowserRouter` to handle client-side routing. Inside the `BrowserRouter` component, different routes are defined using the `Routes` and `Route` components:

- **`Navbar`**: Displays the navigation bar and passes relevant props for cart functionality.
- **`Home`**: The landing page component which includes the banner and categories.
- **`GirlsTopCards`, `GirlsDressCard`, `GirlsTrousersCard`**: Components to display product cards for different categories.
- **`ProductDetailePage`**: Component to display detailed information about a selected product.

Each route specifies a path and the corresponding component to be rendered. For instance, the home route (`'/'`) renders the `Home` component, and the product detail route (`'/Product/:id'`) renders the `ProductDetailePage` component with the product details.

## Conclusion
By organizing the state and functions in this manner, the `App` component efficiently manages the e-commerce platform’s cart functionality and product displays while ensuring a smooth user experience.
