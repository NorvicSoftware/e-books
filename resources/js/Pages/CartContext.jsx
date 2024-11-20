import { useState, useContext, useEffect, createContext} from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    //variables
    const [cart, setCart] = useState(()  => {
        const savedCart = localStorage.getItem('cart');
        return savedCart? JSON.parse(savedCart) : [];

    });
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    //metodos
    const addBook = (book) => {
        // console.log('anadir', book);
        // const existingBook = 
        setCart((aux) => {
            const existingBook = aux.find(book => book.id === aux.id);
            if (existingBook) {
                return aux.map(book => book.id === aux.id? {...book, quantity: book.quantity + 1} : book);
            } else {
                return [...aux, {...book, quantity: 1}];
            }
        });
        console.log('carrito de compras:', cart);
    }

    const removeBook = () => {
        console.log('eliminar');
    }

    return (
        <CartContext.Provider value={{
            cart,
            addBook
        }}>
            {children}
        </CartContext.Provider>
    );
}