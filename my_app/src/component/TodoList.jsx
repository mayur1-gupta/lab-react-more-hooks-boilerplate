import React, { useRef, useState } from "react";
import ListItem from "./ListItem";
import "../App.css";

const TodoList = () => {
    const inputRef = useRef();
    const [items, setItems] = useState([]);

    const addTodo = () => {
        const newItems = inputRef.current.value.trim();
        if (newItems === "") return;

        setItems(prevItems => [...prevItems, newItems]);
        inputRef.current.value = "";
        inputRef.current.focus();
    };

    const handleTodo = (e) => {
        if (e.key === "Enter") {
           addTodo();
        }
    };

    return (
        <div>
            <div className="input">
                <input type="text" className="btn" ref={inputRef} onKeyDown={handleTodo} />
                <button className="btn1" onClick={addTodo}>Add To list</button>
            </div>
            <div className="list">
                {items.map((item, index) => (
                    <ListItem text={item} key={index} />
                ))}
            </div>
            <div className="last">
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