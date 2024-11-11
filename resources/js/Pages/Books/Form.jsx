import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage, Link } from "@inertiajs/react";
import es from "@/lang/es";
import CreateButton from "@/Components/CreateButton";
import CancelButton from "@/Components/CancelButton";
import LinkButton from "@/Components/LinkButton";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import UserSelect from "@/Components/UserSelect";
export default function Form() {
    const { genres, editorials } = usePage().props;

    const { data, setData, post, errors } = useForm({
        title: "",
        subtitle: "",
        version: "",
        publish_date: "",
        price_sale: "",
        language: "",
        page_number: 0,
        isbn: "",
        genre_id: "",
        editorial_id: "",
        detail: "",
        image: "",
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("books.store"), {
            onSuccess: () => {
                console.log('OK');
                // resetForm();
            },
            onError: (error) => {
                console.error(error);
            },
        });
    }

    const languages = [
        { value: 'Español', label: 'Español' },
        { value: 'English', label: 'English' },
        { value: 'Portugues', label: 'Portugues' }
    ];

    // console.log(genres);
    // console.log(editorials);

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
                            <form>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Generos
                                        </label>
                                        <select
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            name="genre_id" value={data.genre_id} onChange={(e) => setData('genre_id', e.target.value)}
                                        >
                                            <option value="">Seleccione un género</option>
                                            {genres.map((genre) => (
                                                <option key={genre.id} value={genre.id}>{genre.name}</option>
                                            ))}
                                        </select>
                                        {errors.genre_id && (
                                            <p className=" text-red-500">{errors.genre_id}</p>
                                        )}

                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Editoriales
                                        </label>
                                        <select
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            name="editorial_id" value={data.editorial_id} onChange={(e) => setData('editorial_id', e.target.value)}
                                        >
                                            <option value="">Seleccione un Editorial</option>
                                            {editorials.map((editorial) => (
                                                <option key={editorial.id} value={editorial.id}>{editorial.name}</option>
                                            ))}
                                        </select>
                                        {errors.editorial_id && (
                                            <p className=" text-red-500">{errors.editorial_id}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div>
                                        <InputLabel>Titulo</InputLabel>
                                        <TextInput className="block w-full" type="text" name="title" id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} />
                                        {errors.title && (
                                            <p className=" text-red-500">{errors.title}</p>
                                        )}
                                    </div>
                                    <div>
                                        <InputLabel>Subtitulo</InputLabel>
                                        <TextInput className="block w-full" type="text" name="subtitle" id="subtitle" value={data.subtitle} onChange={(e) => setData('subtitle', e.target.value)} />
                                        {errors.subtitle && (
                                            <p className=" text-red-500">{errors.subtitle}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div>
                                        <InputLabel>Versión</InputLabel>
                                        <TextInput className="block w-full" type="text" name="version" id="version" value={data.version} onChange={(e) => setData('version', e.target.value)} />
                                        {errors.version && (
                                            <p className=" text-red-500">{errors.version}</p>
                                        )}
                                    </div>
                                    <div>
                                        <InputLabel>Fecha de Publicación</InputLabel>
                                        <TextInput className="block w-full" type="text" name="publish_date" id="publish_date" value={data.publish_date} onChange={(e) => setData('publish_date', e.target.value)} />
                                        {errors.publish_date && (
                                            <p className=" text-red-500">{errors.publish_date}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div>
                                        <InputLabel>Precio de Venta</InputLabel>
                                        <TextInput className="block w-full" type="number" name="price_sale" id="price_sale" value={data.price_sale} onChange={(e) => setData('price_sale', e.target.value)} />
                                        {errors.price_sale && (
                                            <p className=" text-red-500">{errors.price_sale}</p>
                                        )}
                                    </div>
                                    <div>
                                        <InputLabel>Idioma</InputLabel>
                                        {/* <UserSelect options={languages} name="language" value={data.language} onChange={(e) => setData('language', e.target.value)} /> */}
                                        <select
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            name="language" onChange={(e) => setData('language', e.target.value)}
                                        >
                                            <option value="">Seleccione un Idioma</option>
                                            {languages.map((language) => (
                                                <option key={language.value} value={language.value}>{language.label}</option>
                                            ))}
                                        </select>
                                        {errors.language && (
                                            <p className=" text-red-500">{errors.language}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div>
                                        <InputLabel>Numero de Paginas</InputLabel>
                                        <input className="block w-full" type="text" name="page_number" id="page_number" value={data.page_number} onChange={(e) => setData('page_number', e.target.value)} />
                                        {errors.page_number && (
                                            <p className=" text-red-500">{errors.page_number}</p>
                                        )}
                                    </div>
                                    <div>
                                        <InputLabel>ISBN</InputLabel>
                                        <input className="block w-full" type="text" name="isbn" id="isbn" value={data.isbn} onChange={(e) => setData('isbn', e.target.value)} />
                                        {errors.isbn && (
                                            <p className=" text-red-500">{errors.isbn}</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <InputLabel>Imagen</InputLabel>
                                    <input className="block w-full" type="file" name="image" id="image" onChange={(e) => setData('image', e.target.files[0])} />
                                </div>
                                <div>
                                    <InputLabel>Detalle</InputLabel>
                                    <input className="block w-full" type="text" name="detail" id="detail" value={data.detail} onChange={(e) => setData('detail', e.target.value)} />
                                </div>

                                <div className="flex justify-end space-x-2 mt-2">
                                    <CreateButton type="submit" onClick={submit}>Guardar</CreateButton>
                                    <LinkButton className="bg-gray-500 hover:bg-gray-600" href={route('books.index')}>{es.button.cancel}</LinkButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    )
}