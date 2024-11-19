import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const { books } = usePage().props;

    console.log(books);

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">

                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className='grid grid-cols-6 gap-4'>
                                {books.map((book) => (
                                    <div class="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <div class="mb-4">
                                            {book.image.length > 0 ? (
                                                <img src={'/storage/images/' + book.image[0].url} alt="Portada del libro" class="w-full h-auto rounded-md" />
                                            ) : (
                                                <img src="http://placehold.it/200x300" alt="Portada del libro" class="w-full h-auto rounded-md" />
                                            )}
                                        </div>
                                        <div class="text-center">
                                            <h1 class="text-2xl font-bold mb-2">{book.title}</h1>
                                            <p class="text-xl text-gray-600">Precio: ${book.price_sale}</p>
                                        </div>
                                        <button class="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                                            Añadir al carrito
                                        </button>
                                    </div>
                                ))}




                            </div>
                        </main>

                    </div>
                </div>
            </div>
        </>
    );
}
