import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, Link } from "@inertiajs/react";
import LinkButton from "@/Components/LinkButton";
import Show from "./Show";
export default function Index(){
    const { books } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Libros
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className=" flex justify-between">
                                {/* <TextInput type="text" placeholder="Buscar..." onChange={(e) => setSeachGenres(e.target.value)} />
                                <Form lang1={lang1.lang}/> */}
                                {/* <Link href={route('books.create')}
                                  >CREAR NUEVO LIBRO</Link> */}
                                  <LinkButton className="bg-blue-500 hover:bg-blue-600" href={route('books.create')}>CREAR NUEVO LIBRO</LinkButton>
                            </div>
                            
                            <table className="table-auto w-full mt-2">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Titulo
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            SubTitulo
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-red-500 uppercase">
                                            version
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-red-500 uppercase">
                                            Fecha
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-red-500 uppercase">
                                            pricio venta
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-red-500 uppercase">
                                            ISBN
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-red-500 uppercase">
                                            Acción
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-400">
                                    {books.map((book) => (
                                        <tr key={book.id} >
                                            <td className="px-6 py-4 text-left text-sm">{book.title}</td>
                                            <td className="px-6 py-4 text-left text-sm">{book.subtitle}</td>
                                            <td className="px-6 py-4 text-left text-sm">{book.version}</td>
                                            <td className="px-6 py-4 text-left text-sm">{book.publish_date}</td>
                                            <td className="px-6 py-4 text-left text-sm">{book.price_sale}</td>
                                            <td className="px-6 py-4 text-left text-sm">{book.isbn}</td>
                                            <td className="px-6 py-4 text-left text-sm ">
                                                <div className="flex justify-end space-x-2">
                                                    <Show book={book} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    )
}