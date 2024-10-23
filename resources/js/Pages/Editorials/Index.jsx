import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Form from "./Form";
import Delete from "./delete";

export default function Index() {
    const { editorials } = usePage().props;

    console.log(editorials);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Generos
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
                                            Nombre
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            e-Mail
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Celular
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Dirección
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Acción
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {editorials.map((editorial) => (
                                        <tr key={editorial.id}>
                                            <td className="px-6 py-4 text-left text-sm">
                                                {editorial.name}
                                            </td>
                                            <td className="px-6 py-4 text-left text-sm">
                                                {editorial.email}
                                            </td>
                                            <td className="px-6 py-4 text-left text-sm">
                                                {editorial.phone}
                                            </td>
                                            <td className="px-6 py-4 text-left text-sm">
                                                {editorial.address}
                                            </td>
                                            <td className="px-6 py-4 text-left text-sm">
                                                <Form
                                                    id={editorial.id}
                                                    editorial={editorial}
                                                />
                                                <Delete
                                                    id={editorial.id}
                                                    editorial={editorial}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
