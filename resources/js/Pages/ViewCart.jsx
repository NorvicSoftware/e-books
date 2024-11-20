import { useCartContext } from "./CartContext"
import { Head, Link } from "@inertiajs/react";


export default function ViewCart() {

    const { cart, eliminarcart, count } = useCartContext();

    console.log(cart);

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
                                    <Link
                                        href={route('login')}
                                        className="text-blue-300 hover:text-blue-500"
                                    >
                                        Iniciar sesion
                                    </Link>
                                </div>
                            </div>
                        </header>
                        <main className="mt-6">
                            <div className='grid grid-cols-6 gap-4'>
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
                                                        <img src={'/storage/images/' + item.image[0].url} alt="Portada del libro" className="w-full h-auto rounded-md" />
                                                    ) : (
                                                        <img src="http://placehold.it/200x300" alt="Portada del libro" className="w-full h-auto rounded-md" />
                                                    )}
                                                </td>
                                                <td>{item.title}</td>
                                                <td>{item.price_sale}</td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                    // onChange={(e) => setQuantity(item.id, e.target.value)}
                                                    />
                                                </td>
                                                <td>{item.price_sale * item.quantity}</td>
                                                <td>
                                                    <button
                                                    // onClick={() => removeFromCart(item.id)}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </main>

                    </div>
                </div>
            </div>
        </>
    );
}