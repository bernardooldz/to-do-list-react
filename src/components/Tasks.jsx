import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteClick }) {
    const navigate = useNavigate()

    function onSeeDetailsClick(task){
        const query = new URLSearchParams();
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className="containerTasks">
            {tasks.map((task) => (
                <li key={task.id} className="containerTask">
                    <button className={`task ${task.isCompleted && "taskComplete"}` }
                        onClick={() => onTaskClick(task.id)}>
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
    );
}

export default Tasks