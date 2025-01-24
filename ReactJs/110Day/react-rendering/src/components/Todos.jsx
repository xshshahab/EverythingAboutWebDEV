import React, { useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState(
        [
            {
                id: 1,
                title: "Learn React",
                description: "Go through React documentation and build a simple app.",

            },
            {
                id: 2,
                title: "Grocery Shopping",
                description: "Buy fruits, vegetables, and snacks for the week.",

            },
            {
                id: 3,
                title: "Workout",
                description: "Complete a 30-minute workout session at the gym.",

            },
            {
                id: 4,
                title: "Read a Book",
                description: "Read 50 pages of 'Atomic Habits'.",

            },
            {
                id: 5,
                title: "Plan Weekend Trip",
                description: "Research destinations and make a travel itinerary.",

            },
        ])
    return (
        <div>
            <h1 style={{ margin: "20px 0px", color: "rebeccapurple" }} >All Todos List</h1>
            {
                todos.map((todo) => {
                    return (
                        <div style={{ display: "flex", border: "2px solid green", margin: "10px 0px", padding: "10px 0px", justifyContent: "space-around", alignItems: "center" }} key={todo.id}>
                            <h1  >{todo.title}</h1>
                            <p  >{todo.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Todos