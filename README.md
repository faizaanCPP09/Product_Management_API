# Simple Product Management API

This project is a simple RESTful API built using **Node.js**, **Express.js**, and **PostgreSQL** with **Sequelize** ORM. It allows users to manage a list of products, providing endpoints for creating, reading, updating, and deleting products.

## Features

- **Create** a new product
- **Retrieve** all products or a specific product by ID
- **Update** an existing product
- **Delete** a product
- Includes proper error handling and data validation

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or above)
- [PostgreSQL](https://www.postgresql.org/) (v12 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/faizaanCPP09/Product_Management_API.git
cd product-management-api
```

### 2. Install dependencies

```bash
Run the following command to install the required dependencies: npm install
```

### 3. Set up PostgreSQL

```bash
Ensure PostgreSQL is installed and running on your local machine. Create a database for this project:
CREATE DATABASE productdb;
```
### 4. Configure environment variables

```bash
Create a .env file in the root directory and add the following content, replacing the placeholders with your actual PostgreSQL username, password, and database name:
DATABASE_URL=postgres://username:password@localhost:5432/productdb
PORT=3000
```

### 5. Run the application

```bash
After setting up the environment variables, start the server:
npm run dev

The server should start, and you should see a message like this:
Server is running on port 3000
```
### 6. API Endpoints
```bash
You can test the API using tools like ThunderClient or Postman.
```

### 7. Error Handling
```bash
Error Handling
Returns 400 Bad Request for missing required fields (name, price, or category).
Returns 404 Not Found for invalid product IDs.
Returns 500 Internal Server Error for any server issues.
```
### 8. Technologies Used
```bash
• Node.js: Server-side JavaScript runtime
• Express.js: Web framework for building APIs
• Sequelize: ORM for interacting with the PostgreSQL database
• PostgreSQL: Relational database for storing product data
```
