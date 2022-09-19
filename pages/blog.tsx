import { NextPage } from "next";
import { dataset, Header, BlogList } from "../compornents";

const BlogPage: NextPage = () => {
    return (
        <>
            <Header></Header>
            <BlogList blogs={dataset.blogs} />
        </>
    )
}

export default BlogPage