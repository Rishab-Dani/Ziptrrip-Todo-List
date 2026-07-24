# 📘 Todo Management API Documentation

This document describes all REST API endpoints available in the Todo Management Application.

---

# Base URL

```
http://localhost:5000/api/todos
```

---

# 1. Get All Todos

### Endpoint

```
GET /api/todos
```

### Description

Returns all available todos.

### Response

```json
[
  {
    "id": 1,
    "title": "Complete Assignment",
    "description": "Finish TodoList App",
    "priority": "High",
    "completed": false,
    "createdAt": "2026-07-25T10:20:30Z"
  }
]
```

---

# 2. Get Todo by ID

### Endpoint

```
GET /api/todos/:id
```

### Example

```
GET /api/todos/1
```

### Response

```json
{
  "id": 1,
  "title": "Complete Assignment",
  "description": "Finish TodoList App",
  "priority": "High",
  "completed": false,
  "createdAt": "2026-07-25T10:20:30Z"
}
```

---

# 3. Create Todo

### Endpoint

```
POST /api/todos
```

### Request Body

```json
{
  "title": "Learn React",
  "description": "Practice React Hooks",
  "priority": "Medium"
}
```

### Success Response

```json
{
  "message": "Todo created successfully."
}
```

---

# 4. Update Todo

### Endpoint

```
PUT /api/todos/:id
```

### Example

```
PUT /api/todos/1
```

### Request Body

```json
{
  "title": "Learn React",
  "description": "Practice Hooks Daily",
  "priority": "High",
  "completed": true
}
```

### Success Response

```json
{
  "message": "Todo updated successfully."
}
```

---

# 5. Delete Todo

### Endpoint

```
DELETE /api/todos/:id
```

### Example

```
DELETE /api/todos/1
```

### Success Response

```json
{
  "message": "Todo deleted successfully."
}
```

---

# Todo Object

| Field | Type | Description |
|------|------|-------------|
| id | Number | Unique Todo ID |
| title | String | Todo title |
| description | String | Todo description |
| priority | String | High, Medium, Low |
| completed | Boolean | Completion status |
| createdAt | String | Date and time when the todo was created |

---

# HTTP Status Codes

| Code | Meaning |
|------|----------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 404 | Todo Not Found |
| 500 | Internal Server Error |