import { BlogData } from "./dataset";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Blog: React.FC<BlogData> = (props) => {
    return (
        <div className={styles.blog}>
            <Image src={props.image} alt="noimage" layout="fill" className={styles.blogImage} />
            <p>{props.title}</p>
            <a className={styles.link} href={props.url}></a>
        </div>
    )
}

export default Blog