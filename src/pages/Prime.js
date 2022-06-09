import React, { useState, useEffect } from "react";
import styles from "./Prime.module.css";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.css";
import axios from "axios";

let userSelectItems = [];

const baseUrl = "https://jsonplaceholder.typicode.com/users/";

const Prime = () => {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState({});

  useEffect(() => {
    const getData = async (url, setFunction) => {
      try {
        let response = await axios.get(url);
        setFunction(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    /* */
    getData(baseUrl, setUsers);
  }, []);

  if (userSelectItems.length === 0 && users.length > 0) {
    users.map((user) => {
      userSelectItems.push({ label: user.name, value: user.name });
    });
    console.log(userSelectItems);
  }

  return (
    <div className={styles.prime_container}>
      <h1 className={styles.prime_header}>Prime React</h1>
      <div className={styles.prime_component_column}>
        <Button
          className={styles.prime_button}
          label="Prime Button"
          onClick={() => {
            alert("prime");
          }}
        />
        <h5 style={{ color: "white", margin: "0" }}>User Select:</h5>
        <Dropdown
          style={{}}
          value={user}
          options={userSelectItems.length > 0 ? userSelectItems : []}
          onChange={(e) => {
            setUser(e.value);
          }}
          placeholder="Select a user"
        />
        <h5>Username: {user === "" ? "" : `${user}`}</h5>
      </div>
    </div>
  );
};

export default Prime;
