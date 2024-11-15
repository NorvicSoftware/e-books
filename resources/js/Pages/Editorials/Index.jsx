import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Form from "./Form";
import Delete from "./Delete";
import TextInput from "@/Components/TextInput";
import { useState } from "react";

export default function Index() {
    const { editorials } = usePage().props;
    const [lang1, setLang1] = useState({ lang: "es" });
    const [searchEditorials, setSeachEditorials] = useState("");
    const filteredEditorials = editorials.filter((editorial) =>
        editorial.name.toLowerCase().includes(searchEditorials.toLowerCase())
    );

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
                            </div>
                            <div className=" flex justify-between  items-left">
                                <TextInput
                                    className="h-12 w-80"
                                    type="text"
                                    placeholder="Filtrar nombre..."
                                    onChange={(e) =>
                                        setSeachEditorials(e.target.value)
                                    }
                                />
                                <Form lang1={lang1.lang} />
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
                                    {filteredEditorials.map((editorial) => (
                                        // {editorials.map((editorial) => (
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
                            <div className="mt-2 mb-0 px-3 flex justify-between items-center">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
