import React, { useRef, useState } from "react";
import ListItem from "./ListItem";
import "../App.css";

const TodoList = () => {
    const inputRef = useRef();
    const [items, setItems] = useState([]);

    const addTodo = () => {
        const newItem = inputRef.current.value.trim();
        if (newItem === "") return;

        setItems(prevItems => [...prevItems, newItem]);
        inputRef.current.value = "";
        inputRef.current.focus();
    };

    const handleTodoEnter = (e) => {
        if (e.key === "Enter") {
           addTodo();
        }
    };

    return (
        <div>
            <div className="new-input">
                <input type="text" className="new-btn" ref={inputRef} onKeyDown={handleTodoEnter} />
                <button className="new-btn1" onClick={addTodo}>Add To list</button>
            </div>
            <div className="new-list">
                {items.map((item, index) => (
                    <ListItem text={item} key={index} />
                ))}
            </div>
            <div className="new-last">
                <button
                    onClick={() => {
                        inputRef.current.focus();
                    }}
                >
                    Reach Top
                </button>
            </div>
        </div>
    );
}

export default TodoList;