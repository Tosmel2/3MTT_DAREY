# Express.js + PostgreSQL CRUD API

A mini project to demonstrate basic CRUD operations using Express.js and PostgreSQL.

## Features
- Express.js REST API
- PostgreSQL database integration
- CRUD for `users` table
- Basic error handling

## Setup

1. Install PostgreSQL and create a database
2. Run the SQL:
    ```bash
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INTEGER
    );
    ```

3. Create `.env` file:
    ```bash
    DB_USER=your_user
    DB_HOST=localhost
    DB_NAME=your_db
    DB_PASSWORD=your_password
    DB_PORT=5432
    PORT=5000
    ```

4. Install dependencies

    ```bash
    npm install
    ```

5. Start server
    ```bash
        node index.js
    ```

## API Endpoints

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| GET    | /users      | Get all users     |
| GET    | /users/:id  | Get user by ID    |
| POST   | /users      | Create a new user |
| PUT    | /users/:id  | Update a user     |
| DELETE | /users/:id  | Delete a user     |
