import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import '../../styles/_Card.scss';
import Container from '@mui/material/Container';
import {useCartContext} from '../../context/CartContext';

import { Link } from 'react-router-dom';
import useContext from 'react';

export default function Card  ({ data }) {
   const {cartProducts, addProductToCart} = useContext(useCartContext)
   const { name, thumbnail, price, id, talle, stock } = data

   const addToCart = (e) => {
    e.stopPropagation()  
    console.log("Productos agregados:", cartProducts) 
    addProductToCart(data)

   return (


    <>
      <CssBaseline />
      <Container  maxWidth="sm" className="itemlistContainer">


        
        <div className="itemList">
        <Link to={`/productos/${id}`}>
          <div className="imgContainer">
          
            <img src= {thumbnail} alt="clothes" />
          </div>
          </Link>
          <div className='itemDetail'>
          <h3>{name}</h3>
          <div className="Talle">Size: {talle} </div>
          <p className="precio">${price}</p>
          
          <div className='detailsContainer'>
          <Button onClick={addToCart} className="btn-custom">agregar al carrito</Button>
          <Link to={`/productos/${id}`}>
          <Button className ="btnDetalles"  size="small">
            DETAILS
          </Button>
          </Link>
          </div>
        </div>
        </div>
        
      </Container>
    </>
  );
};

}