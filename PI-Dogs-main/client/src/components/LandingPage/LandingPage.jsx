import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

function LandingPage() {
  return (
    <div className={styles['landing-page']}>
      <div className={styles.content}>
      <h1 className={styles['animated-text']}>Love your</h1>
      <h1 className={styles['animated-text']}>furry friend</h1>
      <div className={styles['button-container']}>
        <Link to="/home">
        <button className={styles.button}>Sniff Around!</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;