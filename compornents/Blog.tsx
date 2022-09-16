import { NextPage } from "next";

type Props = {
    title?: string;
    image?: string;
    url?: string;
}

const Blog: NextPage = (props: Props) => {
    return (
        <div>
            <p>{props.title}</p>
            <img src={props.image} alt="noimage" />
            <a href={props.url}></a>
        </div>
    )
}

export default Blog