import { useState } from "react"

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="containerAddTasks">
            <input
                type="text"
                placeholder="Digite o título da tarefa."
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                type="text"
                placeholder="Digite a descrição da tarefa."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button
                onClick={() => {
                    if(!title.trim() || !description.trim()){
                        return alert("Preencha todos os campos.")
                    }

                    onAddTaskSubmit(title, description)
                    setTitle("")
                    setDescription("")
                }}
            >
                Adicionar
            </button>
        </div>
    )
}

export default AddTask