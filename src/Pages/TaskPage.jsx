import { ChevronsLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
    const [SearchParams] = useSearchParams()
    const title = SearchParams.get("title")
    const description = SearchParams.get("description")

    const navigate = useNavigate();
    function onBackNavigate() {
        navigate(-1)
    }

    return (
        <div className="divPrincipal">
            <div className="container">
            <Title sectionName={"Detalhes da Tarefa"} nameClass={"titleGeral"}/>
                <div className="containerDatailsTask">
                    <h2>{title}</h2>
                    <p>{description}</p>

                    <button onClick={onBackNavigate}>
                        <ChevronsLeft />
                        VOLTAR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskPage