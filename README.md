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
   git clone https://github.com/your-username/task-management-app.git


## Copy code

2. Navigate to the backend directory:

cd task-management-app/backend

markdown
Copy code

3. Install dependencies:

composer install

markdown
Copy code

4. Copy the `.env.example` file and rename it to `.env`:

cp .env.example .env

markdown
Copy code

5. Generate application key:

php artisan key:generate

markdown
Copy code

6. Configure your database connection in the `.env` file:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password

markdown
Copy code

7. Migrate and seed the database:

php artisan migrate --seed

markdown
Copy code

8. Start the Laravel development server:

php artisan serve

markdown
Copy code

### Frontend (Vue.js)

1. Navigate to the frontend directory:

cd ../frontend

markdown
Copy code

2. Install dependencies:

npm install


### Copy code

3. Start the Vue.js development server:

### npm run serve

bash
Copy code

4. Access the application in your browser at `http://localhost:8080`

## Test Credentials

You can use the following test credentials to log in to the application:

- Email: test@example.com
- Password: password123

Feel free to create new accounts for testing purposes or use the seeded test data.
