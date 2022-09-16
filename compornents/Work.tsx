import { WorkData } from "./dataset";

const Work: React.FC<WorkData> = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.explain}</p>
            <a href={props.url}></a>
        </div>
    )
}

export default Work