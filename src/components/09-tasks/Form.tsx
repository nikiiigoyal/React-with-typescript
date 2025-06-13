// Create a form with a single input.Set up a controlled input.Set up a form submit handler and ensure it checks for empty values.

import { useState } from "react";
import type { Task } from "./types";

type FormProps= {
addTask: (task:Task) => void
}
function Form({addTask}:FormProps ) {
const [text,setText] = useState('')
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>  {
e.preventDefault();
if(!text) {
    alert('Please enter a task');
    return;
}
// add task
addTask({
    id: new Date().getTime().toString(),
    description: text,
    isCompleted: false,
})
setText('')
}
    return (
        <>
        <form className="form task-form" onSubmit={handleSubmit}>
            <input
            type="text"
            className="form-input"
            value={text}
            onChange={(e) => {
                setText(e.target.value)
            }}>
            
            </input>
            <button type="submit" className="btn">
             Add task
            </button>
        </form>
        </>
    )
}
export default Form;