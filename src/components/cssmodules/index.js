import React from 'react';
import styles from './style.module.css';

function CssModules() {
  return (
    <div>
        <header className={styles.header}>
             Hello Bar
        </header>
        <p className={styles.testclass}>This is a test</p>
    </div>
  )
}

export default CssModules;