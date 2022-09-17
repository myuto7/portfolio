import { Blog } from "./index";
import { BlogData } from './dataset';

type Data = {
    blogs: BlogData[];
};

const BlogList: React.FC<Data> = (props) => {
    return (
        <div>
            {props.blogs.map((value, index) => {
                return <Blog title={value.title} image={value.image} url={value.url} key={index.toString()} />
            })}
        </div>

    )
}

export default BlogList