import React from "react"
import "./TodoForm.css"
import { TodoContext} from  "../TodoContext"

function TodoForm() {
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState("")

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = (event) => {
        event.preventDefault()
        setOpenModal(false)
    }

    return(
        <form onSubmit={(event) => {
            event.preventDefault()
        }}>
            <label>Escribe tu nuevo TODO:</label>
            <textarea
                placeholder="Cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button type="" 
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}>
                    Cancelar
                </button>
                <button type="submit" 
                class="TodoForm-button TodoForm-button--add"
                onClick={onSubmit}>
                    Añadir
                </button>
            </div>
            
        </form>
    )
}

export { TodoForm }