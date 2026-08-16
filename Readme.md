# Project Management Backend

A backend API for a **Project Management System** built using **Node.js, Express.js, and MongoDB**.

The project is currently under development. At this stage, the main functionality implemented is **user creation with role-based user types**.

## 🚀 Tech Stack

* **Node.js** — JavaScript runtime
* **Express.js** — Backend web framework
* **MongoDB** — NoSQL database
* **Mongoose** — MongoDB object modeling
* **JWT** — Authentication and authorization *(planned/in development)*
* **bcrypt** — Password hashing *(planned/in development)*

## 📌 Current Features

### User Management

Currently implemented:

* Create a new user
* Store users in MongoDB
* User name
* User email
* User password
* User role
* Role validation

### Available Roles

The application currently supports two roles:

| Role        | Description                                      |
| ----------- | ------------------------------------------------ |
| `manager`   | Responsible for managing projects and developers |
| `developer` | Works on assigned projects and tasks             |

More roles and permissions may be added as the project develops.

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/aniketvermadev/project-management-backend.git
```

Move into the project directory:

```bash
cd project-management-backend
```

Install dependencies:

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

Or, if you are using Node directly:

```bash
npm start
```

The server should run on:

```text
http://localhost:3000
```

## 👤 User API

### Create User

**Endpoint**

```http
POST /api/users
```

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "developer"
}
```

### Available Roles

```text
manager
developer
```

### Example Response

```json
{
  "success": true,
  "message": "User created successfully",
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "role": "developer"
  }
}
```

## 🗄️ User Model

The user currently contains information similar to:

```text
User
├── name
├── email
├── password
└── role
```

The `role` field accepts:

```text
manager
developer
```

## 🔒 Security

Security features are being implemented as the project evolves.

Planned security improvements include:

* Password hashing using bcrypt
* JWT-based authentication
* Protected routes
* Role-based authorization
* Authentication middleware
* Request validation
* Secure environment variables

## 🛣️ Roadmap

The project will gradually evolve into a complete project management backend.

### Phase 1 — User Management

* [x] Create user
* [x] Manager role
* [x] Developer role
* [x] User login
* [x] Password hashing
* [x] JWT authentication
* [x] Protected routes
* [x] Role-based authorization
* [ ] Get users
* [ ] Get user by ID
* [ ] Update user
* [ ] Delete user

### Phase 2 — Project Management

* [ ] Create project
* [ ] Update project
* [ ] Delete project
* [ ] Get projects
* [ ] Assign developers to projects
* [ ] Project ownership

### Phase 3 — Task Management

* [ ] Create task
* [ ] Assign task to developer
* [ ] Update task
* [ ] Delete task
* [ ] Task status
* [ ] Task priority
* [ ] Task deadlines

### Phase 4 — Advanced Features

* [ ] Project dashboard APIs
* [ ] Developer workload
* [ ] Manager dashboard
* [ ] Pagination
* [ ] Search and filtering
* [ ] Notifications
* [ ] Activity logs

## 🧪 API Testing

You can test the API using tools such as:

* Postman
* Insomnia
* Thunder Client
* cURL

Example using cURL:

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "developer"
  }'
```

## 📈 Project Status

**Status: 🚧 In Development**

Currently, the project is focused on building the foundation of the backend, starting with user management and role-based users.

Future versions will introduce authentication, authorization, projects, tasks, and other project management functionality.

## 👨‍💻 Author

**Aniket Verma**

Backend project built for learning and implementing real-world backend development concepts using Node.js, Express.js, MongoDB, authentication, authorization, and REST APIs.
