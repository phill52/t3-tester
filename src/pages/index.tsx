import styles from "./index.module.css";
import React, {useState} from 'react';
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {motion,useScroll,useSpring,useTransform,MotionValue} from "framer-motion";
import { useRef } from "react";
import { render } from "react-dom";

const useParallax = (value: MotionValue<number>, distance: number) =>{
  return useTransform(value, [0, 1], [-distance, distance]);
}  
// const renderPage: NextPage = (props) =>{
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);
//   return (
//     <section className={`container homepage${props.id}`}>
//       <div ref={ref}>
//         {props.page}
//       </div>
//       <motion.h2 style={{ y }}>{`#00${props.id}`}</motion.h2>
//     </section>
    
//     );
// }

const Home: NextPage = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleScroll = (itemId: string) => {
    const element=document.getElementById(itemId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Head>
        <title>Phillip Anerine | Full Stack Developer </title>
        <meta name="description" content="Hello, strange to see you in the metadata. I'm Phillip Anerine, currently a Computer Science major at
        Stevens Institute of Technology, and aspiring full stack developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* {pages.map((page)=>
        <renderPage page={page} />)} */}
        <div className={styles.fullPageContainer}>

          <section className={styles.container}>
            <div className={styles.introContainer}>
            <h1 className={styles.title}>
              Phillip <span className={styles.whiteSpan}>Anerine</span>
            </h1>
            <img onClick={()=>handleScroll('section-2')} src={'/images/downarrow.png'} className={styles.downarrow}/>
            
            {/* <button onClick={()=>handleScroll('section-2')}>Hello</button> */}
            </div>
          </section>
          

          <section className={styles.container} id='section-2'>
              <div className={styles.redbox}>
                <h2 className={styles.title}>About me</h2>
                <div className={styles.profileContainer}>
                  <img src={'/images/panerine.jpg'} className={styles.headshot} alt="Headshot of Phillip Anerine"/>
                  <p className={styles.bio}>Hello! I am a 3/4 Computer Science Major studying at Stevens Institute of Technology.
                        I'm from Garfield, NJ, and I'm an aspiring Software Engineer with lots of experience in web development, working
                        on both front-end and back-end. I am a highly motivated self-starter, and am always looking for new opportunities 
                        to gain new experiences. You can look at some of my projects <a> here. </a>
                        </p>
                  </div>
                  <img onClick={()=>handleScroll('section-3')} src={'/images/downarrow.png'} className={styles.downarrow}/>
                  {/* <button onClick={()=>handleScroll('section-3')}>Hello</button> */}
              </div>
          </section>

          <section className={styles.container} id='section-3'>
              <div className={styles.redbox}>
                <h2 className={styles.title}>My Tech Stack</h2>
                <div className={styles.profileContainer}>
                  <img src={'/images/panerine.jpg'} className={styles.headshot} alt="Headshot of Phillip Anerine"/>
                  <p className={styles.bio}>Hello! I am a 3/4 Computer Science Major studying at Stevens Institute of Technology.
                        I'm from Garfield, NJ, and I'm an aspiring Software Engineer with lots of experience in web development, working
                        on both front-end and back-end. I am a highly motivated self-starter, and am always looking for new opportunities 
                        to gain new experiences. You can look at some of my projects <a> here. </a>
                        </p>
                  </div>
              </div>
          </section>
      
      </div>

      </main>
    </>
  );
};

export default Home;
