# TodoApp 📝

A full-stack task management application that allows users to register, log in, and manage their personal todo lists.

## 🚀 Features

- **User Authentication**: Secure registration and login using JWT and bcrypt for password hashing.
- **Task Management**: 
  - Create new tasks.
  - View a list of all personal tasks.
  - Mark tasks as completed/incomplete.
  - Delete tasks.
- **Persistence**: Data is stored securely in a PostgreSQL database via Prisma ORM.
- **Frontend**: Simple and clean user interface served as static files.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JSON Web Tokens (JWT), bcryptjs
- **Frontend**: HTML, CSS, JavaScript

## 📦 Getting Started

### Prerequisites

- Node.js installed
- PostgreSQL database running

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd taskyy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/todoapp?schema=public"
   JWT_SECRET="your_super_secret_key"
   PORT=6767
   ```

4. Initialize the database:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Run the application:
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:6767`.

## 📡 API Documentation

### Authentication
| Endpoint | Method | Description | Body |
| :--- | :--- | :--- | :--- |
| `/auth/register` | `POST` | Register a new user | `{ "username": "...", "password": "..." }` |
| `/auth/login` | `POST` | Login to get a JWT token | `{ "username": "...", "password": "..." }` |

### Todos (Requires JWT Token in Header)
All todo endpoints require an `Authorization` header: `Bearer <token>`.

| Endpoint | Method | Description | Body |
| :--- | :--- | :--- | :--- |
| `/todos` | `GET` | Get all todos for the user | N/A |
| `/todos` | `POST` | Create a new todo | `{ "task": "..." }` |
| `/todos/:id` | `PUT` | Update todo completion status | `{ "completed": boolean }` |
| `/todos/:id` | `DELETE` | Remove a todo | N/A |

## 📁 Project Structure

```text
taskyy/
├── prisma/
│   └── schema.prisma      # Database schema definition
├── public/
│   ├── index.html         # Main frontend page
│   └── style.css          # Global styles
├── src/
│   ├── middleware/
│   │   └── authmiddleware.js # JWT validation middleware
│   ├── routes/
│   │   ├── authroutes.js     # Auth endpoints
│   │   └── todoroutes.js     # Todo endpoints
│   ├── prismaClient.js       # Prisma client initialization
│   └── server.js             # Main application entry point
├── package.json           # Project dependencies and scripts
└── .env                   # Environment variables (ignored by git)
```

## 📄 License
ISC
