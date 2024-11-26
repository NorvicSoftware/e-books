import { useCartContext } from "./CartContext"
import { Head, Link, useForm } from "@inertiajs/react";
import { toast } from 'react-toastify';
import { PayPalButtons } from "@paypal/react-paypal-js";



export default function ViewCart({ auth }) {

    const { cart, eliminarcart, count, clearCart, removeBook, totalPrice, updateQuantity } = useCartContext();


    const { data, setData, post } = useForm({
        cart: [],
    });

    console.log('auth', auth);

    const createOrder = (data, actions) =>{
        console.log('create order......');
        return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: 'USD',
                        value: totalPrice,
                    },
                    // items: cart.map((book) => ({
                    //     name: book.title,
                    //     quantity: book.quantity,
                    //     price: book.price,
                    //     category: 'PHYSICAL_GOODS',
                    // })),
                },
            ],
        })
    }

    const onApprove = async (data, actions) => {
        console.log('Confirmacion del pago');
        return actions.order.capture().then((details) => {
            console.log('detalle....', details.payer.name.given_name);
            clearCart();
            submitBook();
            // clearCart();
        })
    }
    function onError() {
        console.log('error al pagar con Paypal');
    }

    const submitBook = () => {
        // e.preventDefault();
        console.log(cart);
        // setData('cart', cart);
        data.cart = cart;
        // data.cart = cart;
        console.log('cart', data);
        post(route('view.cart.store'), {
            onSuccess: (response) => {
                console.log(response);
                if(response.props.flash.status){
                    toast.success(response.props.flash.message);
                }
                else {
                    toast.error(response.props.flash.message);
                }
            },
            onError: (errors) => {
                toast.error('Existe Errores en el formulario', errors);
            },
        });
    }

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">

                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">

                        <header>
                            <div className='container mx-auto flex justify-between items-center'>
                                <h1 className="text-2xl font-bold text-center">Bienvenido a nuestro e-libro</h1>
                                <div className='flex justify-end space-x-2'>
                                    <Link
                                        href={route('book.cart')}
                                        className=" text-blue-300 hover:text-blue-500"
                                    >
                                        Ver mas libros
                                    </Link>
                                    {auth.user ? (
                                        <span className="text-blue-700 font-semibold">{auth.user.name}</span>
                                    )
                                        : (
                                            <Link
                                                href={route('login')}
                                                className="text-blue-300 hover:text-blue-500"
                                            >
                                                Iniciar sesion
                                            </Link>
                                        )
                                    }

                                </div>
                            </div>
                        </header>
                        <main className="mt-6">
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Título</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>Subtotal</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    {item.image.length > 0 ? (
                                                        <img src={'/storage/images/' + item.image[0].url} alt="Portada del libro" className="w-full h-36 rounded-md" />
                                                    ) : (
                                                        <img src="http://placehold.it/200x300" alt="Portada del libro" className="w-full h-36 rounded-md" />
                                                    )}
                                                </td>
                                                <td>{item.title}</td>
                                                <td>{item.price_sale}</td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                        onChange={(e) => updateQuantity(item.id, e.target.value)}
                                                    />
                                                </td>
                                                <td>{item.price_sale * item.quantity}</td>
                                                <td>
                                                    <button
                                                        onClick={() => removeBook(item.id)}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="5" className=" font-semibold">Total</td>
                                            <td className="text-right font-semibold">{Number(totalPrice).toFixed(2)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <button className="text-blue-800 p-4" onClick={() => clearCart()}>Limpiar carrito</button>
                                {auth.user ? (
                                    <PayPalButtons
                                        createOrder={createOrder}
                                        onApprove={onApprove}
                                        onError={onError}
                                    />
                                        // <button onClick={submitBook}>Comprar Ahora</button>

                                    )
                                        : (
                                            <Link
                                                href={route('login')}
                                                className="text-blue-300 hover:text-blue-500"
                                            >
                                                Iniciar sesion para realizar la compra
                                            </Link>
                                        )
                                    }
                            </div>
                        </main>
                        <div>

                        </div>

                    </div>
                </div >
            </div >
        </>
    );
}