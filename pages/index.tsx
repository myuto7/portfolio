import type { NextPage } from 'next'
import { HeadData, About, Footer, dataset } from '../components'
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <HeadData></HeadData>
      {/* <Header></Header> */}
      <About introduction={dataset.introduction}></About>
      <Footer />
    </div>
  )
}

export default Home
