const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const filePath = path.join(__dirname, "../data/todos.json");

// Read todos
const readTodos = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

// Write todos
const writeTodos = (todos) => {
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

// GET all todos
exports.getTodos = (req, res) => {
    const todos = readTodos();
    res.json(todos);
};

// GET single todo
exports.getTodoById = (req, res) => {
    const todos = readTodos();

    const todo = todos.find(t => t.id === req.params.id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    res.json(todo);
};

// CREATE todo
exports.createTodo = (req, res) => {
    const todos = readTodos();

    const newTodo = {
        id: uuidv4(),
        title: req.body.title,
        description: req.body.description || "",
        completed: false,
        priority: req.body.priority || "Medium",
        createdAt: new Date().toISOString()
    };

    todos.push(newTodo);

    writeTodos(todos);

    res.status(201).json(newTodo);
};

// UPDATE todo
exports.updateTodo = (req, res) => {
    const todos = readTodos();

    const index = todos.findIndex(t => t.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    todos[index] = {
        ...todos[index],
        ...req.body
    };

    writeTodos(todos);

    res.json(todos[index]);
};

// DELETE todo
exports.deleteTodo = (req, res) => {
    const todos = readTodos();

    const filtered = todos.filter(t => t.id !== req.params.id);

    if (filtered.length === todos.length) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    writeTodos(filtered);

    res.json({
        message: "Todo deleted successfully"
    });
};