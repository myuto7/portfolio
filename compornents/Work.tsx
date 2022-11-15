import { WorkData } from "./dataset";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Work: React.FC<WorkData> = (props) => {
    return (
        <div className={styles.linkCard}>
            <a className={styles.link} href={props.url}>
                <Image src={props.image} alt="about work" layout="responsive" width={640} height={336} objectFit="cover" />
                <p>{props.title}</p>
            </a>
            {/* <p>{props.explain}</p> */}
        </div>
    )
}

export default Work