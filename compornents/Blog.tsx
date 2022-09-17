import { BlogData } from "./dataset";
import styles from "../styles/Home.module.css";

const Blog: React.FC<BlogData> = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <img src={props.image} alt="noimage" />
            <a href={props.url}></a>
        </div>
    )
}

export default Blog