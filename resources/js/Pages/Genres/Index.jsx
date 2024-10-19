import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";


export default function Index () {
    const {genres} = usePage().props;

    console.log(genres);


    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Generos</h2>}>
            
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Nombre
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Tipo
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Descripción
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {genres.map((genre) => (
                                        <tr key={genre.id}>
                                            <td className="px-6 py-4 text-left text-sm">{genre.name}</td>
                                            <td className="px-6 py-4 text-left text-sm">{genre.type}</td>
                                            <td className="px-6 py-4 text-left text-sm">{genre.description}</td>
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