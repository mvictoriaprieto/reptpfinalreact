import React,{useEffect, useState} from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom';

function ItemDetail ({ prod, loading, setLoading }){
  
  const [ contador, setContador ] = useState(0)
  
  const { agregarAlCarrito } = useCartContext()

  function onAdd(cant){
      setContador(cant)
      agregarAlCarrito( {...prod, cantidad: cant} )
      setLoading(false)
  }



  return <>
      
      
      <div className="container mt-5" key={ prod.id } >
          <div className="row">
              <div className="col-md-6">
                  <img className="card-img-top" src={ prod.img } alt="alt" style={{ width: "500px"  }}/> 
              </div>
              <div className="col-md-6 mt-5">
                  <h5 className="card-title-detail"> Articulo:  { prod.title }</h5>
                  <h6 className="price">Precio: $ { prod.price }</h6>

                  {
                      contador === 0
                      
                      ? 
                      
                          <div className="mt-5 ms-5">
                              <ItemCount stock={prod.stock} initial={1} onAdd={onAdd}/>
                          </div>
                      
                      : 
                          <div className="mt-5">
                              <Link to='/cart'>
                                  <button className="btn-sm btn-info mx-2">Finalizar</button>
                              </Link>
                              <Link to='/'>
                                  <button className="btn-sm btn-info mx-2">Continuar Comprando</button>
                              </Link>
                          </div>
                  }

              </div>
          </div>
      </div>
     

    </>
  }

  export default ItemDetail