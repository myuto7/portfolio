import { NextPage } from "next";
import { dataset, Header, BlogList } from "../compornents";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const BlogPage: NextPage = () => {
    return (
        <>
            {/* <Header></Header> */}
            <nav className={styles.tabNav}>
                <ul className={styles.tabList}>
                    <li>
                        <Link href="/">
                            <a className={styles.tab}>about</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/work">
                            <a className={styles.tab}>work</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a className={styles.tab} type="current">blog</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <BlogList blogs={dataset.blogs} />
        </>
    )
}

export default BlogPage