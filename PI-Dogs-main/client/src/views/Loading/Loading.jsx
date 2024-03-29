import React from 'react';
import loadingGif from '../../assets/icons/loading.gif';
import styles from './Loading.module.css'

const Loading = () => {
    return (
      <div className={styles.loadingContainer}>
        <img src={loadingGif} alt="Loading..." className={styles.loadingGif} />
      </div>
    );
  };
  
  export default Loading;