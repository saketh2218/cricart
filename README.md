# CricCart - Premium Cricket E-Commerce Platform

CricCart is a modern, high-performance, full-stack e-commerce web application dedicated to cricket enthusiasts. Built using **React (Vite)** on the frontend and **Node.js (Express) with MySQL** on the backend, the platform enables seamless browsing, searching, cart management, and user authentication backed by a relational database schema.

---

## 🚀 Key Features

* **Interactive Catalog**: Clean sidebar categorization (Bats, Balls, Protective Gear) and responsive searching matching live queries.
* **Persistent Cart & Wishlist**: Global state context syncs with `localStorage` so products, quantities, and totals persist across reloads.
* **Secure Database User Authentication**:
  * Registration and logins verified against live database records.
  * Passwords hashed and salted using `bcryptjs` before insertion into MySQL.
  * Session authorization powered by JSON Web Tokens (JWT).
* **MySQL & Sequelize Integration**:
  * Dynamic schema tracking with `sequelize.sync({ alter: true })` for automatic table generation.
  * Type-safe DECIMAL formatting on financial calculations to prevent floating-point discrepancies.
* **Resilient UI Fail-safes**:
  * Graceful fallback loader screen for fetch transitions.
  * Image loading fallbacks (`onError` handlers) pointing to local assets if remote CDNs are slow or offline.
* **Premium Glassmorphic Design**: Modern dark theme optimized for both desktop and mobile screens.

---

## 🛠️ Tech Stack

* **Frontend**: React (Vite), React Router DOM, Context API
* **Backend**: Node.js, Express.js
* **Database**: MySQL, Sequelize ORM
* **Security & Auth**: Bcrypt.js, JsonWebToken (JWT), Dotenv
* **Design**: Vanilla CSS (Modern CSS variables, Flexbox, Grid)

---

## 📂 Project Architecture

```text
CRIC-CART/
├── criccart.backend/      # Node.js + Express backend
│   ├── config/            # MySQL Sequelize configuration
│   ├── data/              # Initial products seed list
│   ├── models/            # Sequelize Database models (Product, User)
│   ├── routes/            # API endpoints mapping (products, users)
│   ├── server.js          # Main Express server entry point
│   └── .env.example       # Example database configurations
├── src/                   # React frontend
│   ├── assests/           # Local styling assets & logo
│   ├── components/        # Reusable layout blocks (NavBar, ProductCard, etc.)
│   ├── context/           # Global states (Cart, User, Wishlist)
│   ├── pages/             # App page views (Home, Products, Cart, Profile, etc.)
│   ├── services/          # REST API services (api.js)
│   ├── App.jsx            # App shell & routes mapping
│   ├── index.css          # Core CSS stylesheet
│   └── main.jsx           # App entry point mounts
└── README.md
```

---

## ⚙️ Setup & Installation

### 1. Database Setup
Make sure you have **MySQL Server** running. Open your MySQL client and run:
```sql
CREATE DATABASE criccart;
```

### 2. Backend Installation
1. Navigate to the backend directory:
   ```bash
   cd criccart.backend
   ```
2. Install Node dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file inside `criccart.backend/` and configure your credentials:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=your_mysql_password
   DB_NAME=criccart
   JWT_SECRET=your_jwt_signing_key
   ```
4. Run the backend development server:
   ```bash
   npm run dev
   ```
   *(Note: The server will automatically connect to MySQL, synchronize schemas, and seed the products table with 20 starting items).*

### 3. Frontend Installation
1. Open a new terminal and navigate to the project root:
   ```bash
   cd ..
   ```
2. Install React dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit: **`http://localhost:5173/`**

---

## 🔌 API Endpoints Documentation

### Products Routes (`/api/products`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/products` | Retrieve all products from the database |
| **GET** | `/api/products/:id` | Retrieve single product details by ID |

### Authentication Routes (`/api/users`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/users/register` | Register a new user (hashes password, returns JWT token) |
| **POST** | `/api/users/login` | Log in existing user (verifies hash, returns JWT token) |

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.
