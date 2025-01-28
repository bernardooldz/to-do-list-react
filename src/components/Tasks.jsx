import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

function Tasks({ tasks, onTaskClick, onDeleteClick }) {
    const navigate = useNavigate()

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }

    return (
        <div>            
            <ul className="containerTasks">
            <Title sectionName={"Suas Tarefas:"} nameClass={"subTitles"} />            
                {tasks.map((task) => (
                    <li key={task.id} className="containerTask">
                        <button className={`task ${task.isCompleted && "taskComplete"}`}
                            onClick={() => onTaskClick(task.id)}>
                            {task.isCompleted && <CheckIcon />}
                            {task.title}
                        </button>
                        <button onClick={() => onSeeDetailsClick(task)} className="buttonTask">
                            <ChevronRightIcon />
                        </button>
                        <button className="buttonTask" onClick={() => onDeleteClick(task.id)}>
                            <TrashIcon />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks