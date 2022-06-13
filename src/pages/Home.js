import React from 'react';
import { useNavigate } from 'react-router-dom';
import { pathName } from '../App';
import { Button } from 'primereact/button';
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
      case 'Todos':
        navigate(pathName.TODOS);
      default:
    }
  };

  return (
    <div className={styles.home_container}>
      <h1 className={styles.home_header}>Test Application</h1>
      <div className={styles.home_button_row}>
        <Button
          label="Take me to counter"
          onClick={() => handleButtonClick('Counter')}
        />

        <Button
          label="Take me to prime"
          onClick={() => handleButtonClick('Prime')}
        />

        <Button
          label="Take me to todos"
          onClick={() => handleButtonClick('Todos')}
        />
      </div>
    </div>
  );
};

export default Home;
