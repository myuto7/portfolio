import { BlogData } from "./dataset";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Blog: React.FC<BlogData> = (props) => {
    return (
        <div className={styles.linkCard}>
            <a className={styles.link} href={props.url}>
                <Image src={props.image} alt="noimage" layout="responsive" width={640} height={336} objectFit="cover" className={styles.blogImage} />
                <p className={styles.date}>{props.date}</p>
            </a>
        </div>
    )
}

export default Blog