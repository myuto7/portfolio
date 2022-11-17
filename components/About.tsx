import { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import profile from "../public/profileImage.jpg";
import Link from "next/link";

const About: NextPage = () => {
    return (
        <>
            <nav className={styles.tabNav}>
                <ul className={styles.tabList}>
                    <li>
                        <Link href="/">
                            <a className={styles.tab} type="current">about</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/work">
                            <a className={styles.tab}>work</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a className={styles.tab}>blog</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.centered}>
                <Image src={profile} className={styles.profile} width={200} height={200} />
                <h1>Yuto Mizuno</h1>
            </div>
            <div className={styles.profileStatement}>
                <p>
                    学校で情報工学を学びながら趣味でwebの勉強をしており、フロントエンドとバックエンドに興味があります。<br/>普段は運動したり、ゲームをしたりしています。
                </p>
            </div>
        </>
    )
}

export default About