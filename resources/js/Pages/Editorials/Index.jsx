import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Form from "./Form";
import Delete from "./Delete";

export default function Index() {
    const { editorials } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Editoriales
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-medium text-gray-800">
                                    Agregar Nueva Editorial
                                </h3>
                                <Form />
                            </div>
                            <table className="table-auto w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 bg-gray-50 text-gray-500 font-medium uppercase tracking-wider">
                                            Nombre
                                        </th>
                                        <th className="px-6 py-3 bg-gray-50 text-gray-500 font-medium uppercase tracking-wider">
                                            e-Mail
                                        </th>
                                        <th className="px-6 py-3 bg-gray-50 text-gray-500 font-medium uppercase tracking-wider">
                                            Celular
                                        </th>
                                        <th className="px-6 py-3 bg-gray-50 text-gray-500 font-medium uppercase tracking-wider">
                                            Dirección
                                        </th>
                                        <th className="px-6 py-3 bg-gray-50 text-gray-500 font-medium uppercase tracking-wider">
                                            Acción
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {editorials.map((editorial) => (
                                        <tr
                                            key={editorial.id}
                                            className="bg-white border-b"
                                        >
                                            <td className="px-6 py-4 text-sm text-gray-800">
                                                {editorial.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800">
                                                {editorial.email}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800">
                                                {editorial.phone}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800">
                                                {editorial.address}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800">
                                                <div className="flex space-x-2">
                                                    <Form
                                                        id={editorial.id}
                                                        editorial={editorial}
                                                    />
                                                    <Delete
                                                        id={editorial.id}
                                                        editorial={editorial}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-6">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
