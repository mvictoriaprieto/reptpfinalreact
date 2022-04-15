import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);


export function useCartContext(){ return useContext(CartContext)};

export function CartContextProvider({ children }){
    
    

    const [cartList, setCartList] = useState([]);

    console.log({cartList})

    function agregarAlCarrito(item){
        
        if ( isInCart(item.id) ) {

           const prod = cartList.find((p) => p.id === item.id);
           const { cantidad } = prod;
           
           prod.cantidad = item.cantidad + cantidad;
            const newCart = [ ...cartList ];
            setCartList(newCart);

        } else {

            setCartList([ ...cartList, item])
        }
        
    }

    function emptyCart(){
        setCartList([]);
    }

    const isInCart = (id) =>{
        return cartList.some( prod => prod.id === id)
        
    }


    const deleteOne = (id) => {
        setCartList(cartList.filter(p => p.id !== id));
    }

    const sumaTotal = () => {
       return cartList.reduce((acum, item) => acum = acum + (item.price * item.cantidad), 0)
    }

    const cantidad = () => {
        return cartList.reduce((acum, item) => acum += item.cantidad, 0)
    } 

    return <CartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        emptyCart, 
        deleteOne,
        sumaTotal,
        cantidad
    }}>
        { children }
    </CartContext.Provider>
}
