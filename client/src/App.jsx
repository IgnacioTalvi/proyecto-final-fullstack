import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'
import Header from './components/Header/Header';

function App() {

const [products, setProducts] = useState([]);
const [error, setError] = useState(null);

const API_URL = "http://localhost:3001/api/products";

useEffect(() => {
  async function fetchData() {
    try{
      // Petición HTTP
      const res = await axios.get(API_URL);
      const json = res.data;

      // Guarda en el array de posts el resultado. Procesa los datos
      setProducts(json);   
    } catch(e){
setProducts ([])     }
  }
  fetchData();
}, []); 

  return (
    <>
    <Header />
      <div>
      {products.map(product => (
          <article key={product.id_product}>
            <img src={product.img_url} alt={product.name} className="product_img" width={'150px'}/>
            <h3>{product.name}</h3>
            <p>{product.price}€</p>
            <button>Comprar</button>
            <button>Añadir al carrito</button>
          </article>
        ))}
      </div>
    </>
  )
}

export default App
