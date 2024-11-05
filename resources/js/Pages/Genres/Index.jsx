import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Form from "./Form";
import Delete from "./delete";
import TextInput from "@/Components/TextInput";
import { useState } from "react";
// import { languages } from "vendor/filp/whoops/src/Whoops/Resources/js/prism";

export default function Index() {
    const { genres } = usePage().props;
    const lang1 = usePage().props.auth.lang;
    const [searchGenres, setSeachGenres] = useState(''); 

    console.log(lang1.lang);

    const filteredGenres = genres.filter(genre => genre.name.toLowerCase().includes(searchGenres.toLowerCase()));

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Generos</h2>}>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className=" flex justify-between">
                                <TextInput type="text" placeholder="Buscar..." onChange={(e) => setSeachGenres(e.target.value)} />
                                <Form lang1={lang1.lang}/>
                            </div>
                            
                            <table className="table-auto w-full mt-2">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Nombre
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Descripción
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-red-500 uppercase">
                                            Acción
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-400">
                                    {filteredGenres.map((genre) => (
                                        <tr key={genre.id} >
                                            <td className="px-6 py-4 text-left text-sm">{genre.name}</td>
                                            <td className="px-6 py-4 text-left text-sm">{genre.description}</td>
                                            <td className="px-6 py-4 text-left text-sm ">
                                                <div className="flex justify-end space-x-2">
                                                    <Form lang1 ={lang1.lang} id={genre.id} genre={genre} />
                                                    <Delete id={genre.id} genre={genre} />
                                                </div>
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