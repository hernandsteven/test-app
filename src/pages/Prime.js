import React, { useState, useEffect } from 'react';
import styles from './Prime.module.css';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.css';
import { Carousel } from 'primereact/carousel';
import { useSelector, useDispatch } from 'react-redux';
import {fetchProducts} from '../reducers/productsSlice.js'
import axios from 'axios';

let userSelectItems = [];

const baseUrl = 'https://jsonplaceholder.typicode.com/users/';

const Prime = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState('');
  const [users, setUsers] = useState({});
  const AllProducts = useSelector(({products}) => products.products)

  const getData = async (url, setFunction) => {
    try {
      let response = await axios.get(url);
      setFunction(response.data);
    } catch (e) {
      alert(e)
      console.error(e);
    }
  };

  useEffect(() => {
    getData(baseUrl, setUsers);
  }, []);

  useEffect(() => {
    dispatch(fetchProducts())
  },[])



  if (userSelectItems.length === 0 && users.length > 0) {
    users.forEach((user) => {
      userSelectItems.push({ label: user.name, value: user.name });
    });
  }



  const products = [
    {id:1,name:'Fish', image:'dsfas',price:23},
    {id:2,name:'Cow', image:'dsfas',price:23},
    {id:3,name:'Cheeta', image:'dsfas',price:23},
    {id:3,name:'Cheeta', image:'dsfas',price:23},
    {id:3,name:'Cheeta', image:'dsfas',price:23},
  ]

  const productTemplate = (product) => {
        return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', border:'1px solid white', textOverflow:'clip' }}>
            <h1>{product.title}</h1>
            <img height={300} width={300} alt='' src={product.image}/>
            <p>{product.description}</p>
            <h2 style={{color:'white'}}>{product.price}</h2>
          </div>
        )
  }

  console.log(AllProducts)

  return (
    <div className={styles.prime_container}>
      <h1 className={styles.prime_header}>Prime React</h1>
      <div className={styles.prime_component_column}>
        <Button
          className={styles.prime_button}
          label="Prime Button"
          onClick={() => {
            alert('prime');
          }}
        />

        <h1 style={{ color: 'black', margin: '0' }}>User Select:</h1>

        <Dropdown
          style={{}}
          value={user}
          options={userSelectItems.length > 0 ? userSelectItems : []}
          onChange={(e) => {
            setUser(e.value);
          }}
          placeholder="Select a user"
        />

        <h1>Username: {user === '' ? '' : `${user}`}</h1>
        <div className={styles.prime_body_container}>
            <div className={styles.box}>
              <h3>Box</h3>
            </div>
            <div className={styles.box}>
              <h3>Box</h3>
            </div>
            <div className={styles.box}>
              <h3>Box</h3>
            </div>
            <div className={styles.box}>
              <h3>Box</h3>
            </div>
            <div className={styles.box}>
              <h3>Box</h3>
            </div>
        </div>
      </div>
        <div className={styles.carousel}>
          <Carousel value={AllProducts} itemTemplate={productTemplate} numVisible={1} numScroll={1} circular={true} autoplayInterval={3000} />
        </div>
    </div>
  );
};

export default Prime;
