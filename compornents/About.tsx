import { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import profile from "../public/profileImage.jpg";

const About: NextPage = () => {
    return (
        <div className={styles.text}>
            <Image src={profile} className={styles.profile} width={200} height={200}/>
            <div>
                <h1>Yuto Mizuno</h1>
                <p>
                    豊田高専に所属しながら趣味でwebの勉強をしています。<br />普段は運動したり、銭湯に行ったりしています。
                </p>
            </div>
        </div>
    )
}

export default About