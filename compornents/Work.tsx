import { WorkData } from "./dataset";
import styles from "../styles/Home.module.css";

const Work: React.FC<WorkData> = (props) => {
    return (
        <div className={styles.linkCard}>
            <p>{props.title}</p>
            <p>{props.explain}</p>
            <a className={styles.link} href={props.url}></a>
        </div>
    )
}

export default Work