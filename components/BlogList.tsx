import { Blog } from "./index";
import { BlogData } from './dataset';
import styles from "../styles/Home.module.css";

type Data = {
    blogs: BlogData[];
};

const BlogList: React.FC<Data> = (props) => {
    return (
        <div className={styles.cardList}>
            {props.blogs.map((value, index) => {
                return <Blog date={value.date} image={value.image} url={value.url} key={index.toString()}/>
            })}
        </div>

    )
}

export default BlogList