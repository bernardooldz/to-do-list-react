import { useState } from "react"
import Title from "./Title";

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="containerAddTasks">
            <Title sectionName={"Adicione uma tarefa"} nameClass={"subTitles"} />
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