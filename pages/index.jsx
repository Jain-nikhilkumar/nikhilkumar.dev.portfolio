import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>AI</h1>
          <h3>Machine Learning</h3>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>NikhilKumar Jain</h1>
            <h6 className={styles.bio}>Software Engineer</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                      Research
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      FLutter Development
                    </span>
                    <span key='MIM' className='MIM'>
                       Machine Learning
                    </span>
                    <span key='GenAI' className='GenAI'>
                      Generative AI
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      PyTorch
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      Tensorflow
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      Web Interfaces
                    </span>
                    <span key='SQL' className='SQL'>
                      SQL
                    </span>
                    <span key='MLOps' className='MLOps'>
                      Firebase
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Software-Engineering
                    </span> <span key='Software-Design' className='Software-Design'>
                      React-js
                    </span>
                    <span key='Bots' className='Bots'>
                      Power-BI 
                    </span>
                    <span key='Bots' className='Bots'>
                      Data Analysis
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/resume">
              <button className={styles.button}>Resume</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me.jpg"
                width={300}
                height={300}
                alt="Jains' Picture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
