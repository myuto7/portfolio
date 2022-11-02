import { Work } from "./index";
import { WorkData } from "./dataset";
import styles from "../styles/Home.module.css";

type Data = {
    works: WorkData[];
}

const WorkList: React.FC<Data> = (props) => {
    return (
        <div className={styles.cardList}>
            {props.works.map((value, index) => {
                return <Work title={value.title} explain={value.explain} url={value.url} key={index.toString()} />
            })}
        </div>
    )
}

export default WorkList
