import React, { useReducer } from "react";
import "../App.css";

const ListItem = (props) => {
    const itemReducer = (state) => {
        return {
            text: state.isHidden ? props.text : "Text is Hidden Now",
            isHidden: !state.isHidden
        };            
    };

    const [state, dispatch] = useReducer(itemReducer, {
        text: props.text,
        isHidden: false,
    });

    return (
        <div>
            <h3>{state.text}</h3>
            <button onClick={dispatch}>Toggle</button>
        </div>
    );
}

export default ListItem;