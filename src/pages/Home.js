import React from 'react';
import { useNavigate } from 'react-router-dom';
import { pathName } from '../App';
import styles from './Home.module.css';

const Home = () => {
  let navigate = useNavigate();

  const handleButtonClick = (page) => {
    switch (page) {
      case 'Counter':
        navigate(pathName.COUNTER);
        break;
      case 'Prime':
        navigate(pathName.PRIME);
        break;
      default:
    }
  };

  return (
    <div className={styles.home_container}>
      <h1 className={styles.home_header}>Test Application</h1>
      <div className={styles.home_button_row}>
        <button
          className={styles.home_button}
          onClick={() => handleButtonClick('Counter')}
        >
          Take me to counter
        </button>
        <button
          className={styles.home_button}
          onClick={() => handleButtonClick('Prime')}
        >
          Take me to prime
        </button>
      </div>
    </div>
  );
};

export default Home;
