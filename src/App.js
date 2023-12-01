import React, {useState} from "react";
import "./App.css"

function App() {
    // Квадраты
    const [isBlue, setIsBlue] = useState(false)
    const handleColorChange = () => {
        setIsBlue(!isBlue)
    }

    // Todo список
    const [todoList, setTodoList] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddTask = () => {
        setTodoList([...todoList, inputValue])
    }


    return (
        <div className="App">
            <div onClick={handleColorChange} className={`${isBlue ? "blue" : "red"} cube`}></div>
            <div onClick={handleColorChange} className={`${!isBlue ? "blue" : "red"} cube`}></div>
            <input onChange={handleInputChange} value={inputValue} type="text"/>
            <button onClick={handleAddTask}>Добавить в список</button>

            {todoList.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}

export default App;
