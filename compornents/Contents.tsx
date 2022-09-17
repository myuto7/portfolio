import React from "react";
import { NextPage } from "next";
import styles from '../styles/Home.module.css';

const Contents: NextPage = () => {
    return (
        <>
            <div className={styles.contents}>
                <p>about</p>
                <p>work</p>
                <p>blog</p>
            </div>
        </>
    )
}

export default Contents