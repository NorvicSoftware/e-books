import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Form from "./Form";
import Delete from "./Delete";

export default function Index() {
    const { authors } = usePage().props;

    console.log(authors);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Autores
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Form />
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Nacionalidad
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Fecha de Nacimiento
                                        </th>
                                        {/* <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Biografía
                                        </th> */}
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Sitio Web
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Red Social
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            ID de Usuario
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Acción
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {authors.map((author) => (
                                        <tr key={author.id}>
                                            <td className="px-6 py-4 text-left text-sm">
                                                {author.nationality}
                                            </td>
                                            <td className="px-6 py-4 text-left text-sm">
                                                {author.birth_date}
                                            </td>
                                            {/* <td className="px-6 py-4 text-left text-sm">
                                                {author.biography}
                                            </td> */}
                                            <td className="px-6 py-4 text-left text-sm">
                                                <a href={author.website}>
                                                    {author.website}
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 text-left text-sm">
                                                <a href={author.social_network}>
                                                    {author.social_network}
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 text-left text-sm">
                                                {author.user_id}
                                            </td>
                                            <td className="px-6 py-4 text-left text-sm">
                                                <Form
                                                    id={author.id}
                                                    author={author}
                                                />
                                                <Delete
                                                    id={author.id}
                                                    author={author}
                                                />
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
    );
}
