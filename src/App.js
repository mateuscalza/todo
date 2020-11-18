import React, { useState } from "react";
import { useLocalStorage, useTitle } from "react-use";
import Button from "./Button";

export default function App() {
  const [inputText, setInputText] = useState('')
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  useTitle(inputText)

  const handleInsert = () => {
    setTasks([
      ...tasks,
      inputText,
    ])
    setInputText('')
  }

  return (
    <div>
      <input value={inputText} onChange={event => setInputText(event.target.value)} />
      <Button text='Incluir' onClick={handleInsert} disabled={!inputText} />

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
