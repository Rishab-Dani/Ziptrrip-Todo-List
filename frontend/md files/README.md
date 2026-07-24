# 📝 Todo Management Application

A modern Full Stack Todo Management Application built using **React.js**, **Node.js**, and **Express.js**. The application allows users to create, view, update, and delete todos through a clean and responsive user interface.

---

## 🚀 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS3

### Backend
- Node.js
- Express.js

### Data Storage
- JSON File (`todos.json`)

---

## ✨ Features

- ✅ Create a new Todo
- ✅ View all Todos
- ✅ View individual Todo Details
- ✅ Update existing Todo
- ✅ Delete Todo
- ✅ Mark Todo as Completed or Pending
- ✅ Priority Levels (High, Medium, Low)
- ✅ Responsive UI
- ✅ Dashboard Statistics
- ✅ REST API Integration

---

## 📂 Project Structure

```
ziptrrip-todo/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── data/
│   │   └── todos.json
│   ├── app.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Rishab-Dani/Ziptrrip-Todo-List
```

---

### 2. Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 📌 Todo Fields

| Field | Description |
|--------|-------------|
| id | Unique identifier |
| title | Todo title |
| description | Todo description |
| priority | High / Medium / Low |
| completed | Completion status |
| createdAt | Creation date |

---

## 🎨 UI Highlights

- Modern violet-themed interface
- Dashboard summary cards
- Responsive layout
- Clean form validation
- Interactive status badges
- Smooth hover animations

---

## 🔗 REST API

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos/:id` | Get todo by ID |
| POST | `/api/todos` | Create todo |
| PUT | `/api/todos/:id` | Update todo |
| DELETE | `/api/todos/:id` | Delete todo |

---

## 👨‍💻 Author

Developed by **Rishab R**