import React, { useState } from 'react';
import styles from './Prime.module.css';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

const citySelectItems = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
];

const Prime = () => {
  const [city, setCity] = useState('NY');
  return (
    <div className={styles.prime_container}>
      <h1 className={styles.prime_header}>Prime React</h1>
      <div className={styles.prime_component_column}>
        <Button
          className={styles.prime_button}
          label="Prime Button"
          onClick={
            {
              /* TODO */
            }
          }
        />

        <Dropdown
          value={city}
          options={citySelectItems}
          onChange={(e) => setCity(e.value)}
          placeholder="Select a City"
        />
      </div>
    </div>
  );
};

export default Prime;
