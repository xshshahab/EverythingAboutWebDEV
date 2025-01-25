import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FilePenLine, Trash2 } from "lucide-react";

const Todo = () => {
    const [todos, setTodos] = useState(() => {
        // Load todos from local storage on initial render
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [todo, setTodo] = useState("");
    const [editingId, setEditingId] = useState(null); // Track the ID of the todo being edited

    // Save todos to local storage whenever the todos array changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleAddOrUpdate = () => {
        if (todo.trim().length === 0) {
            alert("Please Insert Todo");
            return;
        }

        if (editingId) {
            // Update the todo
            setTodos(todos.map(item =>
                item.id === editingId ? { ...item, todo } : item
            ));
            setEditingId(null); // Reset editing mode
        } else {
            // Add a new todo
            const newId = uuidv4();
            setTodos([...todos, { id: newId, todo, isCompleted: false }]);
        }

        setTodo(""); // Clear the input field
    };

    const handleEdit = (id) => {
        const itemToEdit = todos.find((item) => item.id === id);
        setTodo(itemToEdit.todo); // Populate input with the selected todo
        setEditingId(id); // Set editing mode
    };

    const handleDelete = (id) => {
        const newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
    };

    const handleCheckbox = (e) => {
        const id = e.target.name;
        const index = todos.findIndex((item) => item.id === id);
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    return (
        <div className="container min-h-[80vh] p-6 mx-auto my-4 rounded-lg bg-neutral-800 text-white shadow-lg">
            {/* Add or Edit Todo Section */}
            <div id="addtodo" className="flex flex-col items-center justify-center my-6">
                <h2 className="mb-4 text-2xl font-bold text-center text-zinc-300">
                    {editingId ? "Edit Todo" : "Add a Todo"}
                </h2>
                <div id="todo-form" className="flex flex-col items-center gap-2 md:flex-row">
                    <input
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        type="text"
                        placeholder="Enter a task..."
                        className="w-full p-2 text-white rounded md:w-64 bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        onClick={handleAddOrUpdate}
                        className="px-4 py-2 font-medium text-white transition duration-300 bg-green-600 rounded outline-none hover:bg-green-500"
                    >
                        {editingId ? "Update" : "Add"}
                    </button>
                </div>
            </div>

            {/* Todo List Section */}
            <div id="todos" className="my-3">
                <h2 className="mb-2 text-2xl font-bold text-center text-zinc-300">Todo List</h2>
                {todos.length <= 0 ? (
                    <div className="text-sm text-center text-red-500 capitalize">
                        No todos available
                    </div>
                ) : (
                    todos.map((item) => (
                        <div
                            key={item.id}
                            id="todo"
                            className="flex items-center justify-between p-2 px-4 mx-3 mb-2 transition-shadow duration-300 rounded-lg shadow-sm md:mx-36 bg-zinc-700 hover:shadow-md"
                        >
                            <input
                                className="mx-2"
                                onChange={handleCheckbox}
                                type="checkbox"
                                name={item.id}
                                checked={item.isCompleted}
                                id={item.id}
                            />
                            <p
                                className={`${item.isCompleted ? "line-through" : ""
                                    } flex-1 text-gray-300`}
                            >
                                {item.todo}
                            </p>
                            <div id="buttons" className="flex items-center gap-3">
                                <button
                                    onClick={() => handleEdit(item.id)}
                                    className="p-1 font-medium text-white transition duration-300 bg-indigo-600 rounded-lg outline-none hover:bg-indigo-500"
                                >
                                    <FilePenLine size={20} />
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="p-1 font-medium text-white transition duration-300 bg-red-600 rounded outline-none hover:bg-red-500"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Todo;
