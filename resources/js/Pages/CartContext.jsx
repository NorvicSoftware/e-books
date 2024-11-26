import { useState, useContext, useEffect, createContext} from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    //variables
    const [cart, setCart] = useState(()  => {
        const savedCart = localStorage.getItem('cart');
        return savedCart? JSON.parse(savedCart) : [];

    });

    const totalPrice = cart.reduce((sum, cart) => sum + cart.price_sale * cart.quantity, 0);

    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    //metodos
    const addBook = (book) => {
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

    const updateQuantity = (id, quantity) => {
        setCart((aux) => aux.map(book => book.id === id? {...book, quantity} : book));
    }

    const clearCart = () => {
        setCart([]);
        // localStorage.removeItem('cart');
        // console.log('carrito de compras limpio');
    }

    const removeBook = (id) => {
        setCart((aux) => aux.filter(book => book.id !== id));
    }

    return (
        <CartContext.Provider value={{
            cart,
            addBook,
            clearCart,
            removeBook,
            totalPrice,
            updateQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
}