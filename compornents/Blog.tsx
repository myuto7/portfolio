import { BlogData } from "./dataset";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Blog: React.FC<BlogData> = (props) => {
    return (
        <div className={styles.blog}>
            <p>{props.title}</p>
            <Image src={props.image} alt="noimage" layout="fill" />
            <a className={styles.link} href={props.url}></a>
        </div>
    )
}

export default Blog