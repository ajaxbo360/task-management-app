# Task Management Application

This repository contains a full-stack Task Management Application built with Laravel and Vue.js.

## Features

- Create, read, update, and delete tasks.
- Task attributes include title, description, status, and due date.
- Sorting and filtering options for tasks.
- Authentication system to ensure secure access to the application.
- User-specific functionality, including user registration and login.

## Installation

### Backend (Laravel)

1. Clone the repository:

   ```bash
   git clone https://github.com/ajaxbo360/task-management-app.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd task-management-app/backend
   ```

3. Install dependencies:

   ```bash
   composer install
   ```

4. Copy the `.env.example` file and rename it to `.env`:

   ```bash
   cp .env.example .env
   ```

5. Configure your database connection in the `.env` file:

   ```plaintext
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password
   ```

6. Migrate and seed the database:

   ```bash
   php artisan migrate --seed
   ```

7. Start the Laravel development server:

   ```bash
   php artisan serve
   ```

### Frontend (Vue.js)

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Vue.js development server:

   ```bash
   npm run serve
   ```

## Test Credentials

You can use the following test credentials to log in to the application:

- Email: admin@example.com
- Password: secret123

Feel free to create new accounts for testing purposes or use the seeded test data.
