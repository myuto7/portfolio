import { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Footer: NextPage = () => {
    return (
        <>
            <div className={styles.flexCenter}>
                <div className={styles.footerBox}>
                    <p className={styles.footer}>© 2022 Yuto Matsunaga</p>
                </div>
            </div>
        </>
    )
}

export default Footer