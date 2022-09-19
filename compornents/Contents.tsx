import React from "react";
import { NextPage } from "next";
import styles from '../styles/Home.module.css';
import Link from "next/link";

const Contents: NextPage = () => {
    return (
        <>
            <div className={styles.contents}>
                <Link href="/">
                    <a>about</a>
                </Link>
                <Link href="/work">
                    <a>work</a>
                </Link>
                <Link href="/blog">
                    <a>blog</a>
                </Link>
            </div>
        </>
    )
}

export default Contents