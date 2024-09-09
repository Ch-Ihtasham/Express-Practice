"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import styles from './globals.css';

const AnimatedDiagram = () => {
    useEffect(() => {
        gsap.from('.central-node', { duration: 1, scale: 0, ease: "back.out(1.7)" });
        gsap.from('.connected-node', { duration: 1, opacity: 0, stagger: 0.2, y: 20 });
    }, []);

    return (
        <div className={styles.diagramContainer}>
            <div className={`${styles.centralNode} central-node`}>
                {/* <img src="/icons/central-icon.svg" alt="Central Icon" /> */}
            </div>
            <div className={`${styles.connectedNode} ${styles.reactNode} connected-node`}>
                {/* <img src="/icons/react-icon.svg" alt="React Platform" /> */}
                <p>React Platform</p>
            </div>
            <div className={`${styles.connectedNode} ${styles.uiFrameworkNode} connected-node`}>
                {/* <img src="/icons/ant-design-icon.svg" alt="UI Framework" /> */}
                <p>UI Framework</p>
            </div>
            {/* Add more connected nodes here */}
            <svg className={styles.connections}>
                <line x1="200" y1="100" x2="300" y2="200" stroke="white" />
                {/* Add more lines as needed */}
            </svg>
        </div>
    );
};
export default AnimatedDiagram;
