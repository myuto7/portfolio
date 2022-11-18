import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: NextPage = () => {
    return (
        <>
            <div className={styles.flexCenter}>
                <div className={styles.footerBox}>
                    <div className={styles.icons}>
                        <a href="https://github.com/myuto7"><FaGithub size="1.25rem"/></a>
                        <a href="https://twitter.com/myuto7_"><FaTwitter size="1.25rem"/></a>
                        <a href="https://www.instagram.com/m.yuto._/"><FaInstagram size="1.25rem"/></a>
                    </div>
                    <p className={styles.footer}>© 2022 Yuto Matsunaga</p>
                </div>
            </div>
        </>
    )
}

export default Footer