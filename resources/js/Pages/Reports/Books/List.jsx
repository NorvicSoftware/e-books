import { usePage, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import CreateButton from "@/Components/CreateButton";

export default function Index() {
    const { authors } = usePage().props;
    console.log('authors', authors);

    const { data, setData, post, errors } = useForm({
        author: "",
        nationality: "",
        book_count: "",
    });
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("reports.author.books.search"), {
            onSuccess: () => {
                console.log('OK');
                // resetForm();
            },
            onError: (error) => {
                console.error(error);
            },
        });
    }


    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Reporte de libros por author</h2>}>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form>
                                <div className="grid grid-cols-3 ">
                                    <div>
                                        <InputLabel>Author</InputLabel>
                                        <TextInput className="block w-full" type="text" name="author" id="author" value={data.author} onChange={(e) => setData('author', e.target.value)} />
                                    </div>
                                    <div>
                                        <InputLabel>Nacionalidad</InputLabel>
                                        <TextInput className="block w-full" type="text" name="nationality" id="nationality" value={data.nationality} onChange={(e) => setData('nationality', e.target.value)} />
                                    </div>
                                    <div>
                                        <InputLabel>Cantidad de Libros</InputLabel>
                                        <TextInput className="block w-full" type="text" name="book_count" id="book_count" value={data.book_count} onChange={(e) => setData('book_count', e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-2 mt-2">
                                    <CreateButton type="submit" onClick={submit}>Buscar</CreateButton>
                                    {/* <LinkButton className="bg-gray-500 hover:bg-gray-600" href={route('books.index')}>{es.button.cancel}</LinkButton> */}
                                </div>
                            </form>


                            <table className="table-auto w-full mt-2">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Author
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-red-500 uppercase">
                                            Nacionalidad
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-red-500 uppercase">
                                            Biografia
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-red-500 uppercase">
                                            Libros registrados
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-400">
                                    {authors.map((author) => (
                                        <tr key={author.id} >
                                            <td className="px-6 py-4 text-left text-sm">{author.user.name}</td>
                                            <td className="px-6 py-4 text-left text-sm">{author.nationality}</td>
                                            <td className="px-6 py-4 text-left text-sm">{author.biography}</td>
                                            <td className="px-6 py-4 text-left text-sm">{author.books_count}</td>
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