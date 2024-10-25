import Modal from "@/Components/Modal";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function Form({ id = 0, editorial = {} }) {
    const [showModal, setShowModal] = useState(false);
    const { data, setData, errors, post, put } = useForm({
        name: editorial.name || "",
        email: editorial.email || "",
        phone: editorial.phone || "",
        address: editorial.address || "",
    });

    const openModal = () => {
        setShowModal(true);
        if (id > 0) {
            setData(editorial);
        }
    };

    const closeModal = (event) => {
        event.preventDefault();
        setShowModal(false);
    };

    const submit = (event) => {
        event.preventDefault();
        console.log(data);
        if (id > 0) {
            put(route("editorials.update", id), {
                onSuccess: () => {
                    setShowModal(false);
                    resetForm(); // Limpia el formulario
                },
                onError: (errors) => {
                    console.log(errors);
                },
            });
        } else {
            post(route("editorials.store"), {
                onSuccess: () => {
                    setShowModal(false);
                    resetForm(); // Limpia el formulario
                },
                onError: (errors) => {
                    console.log(errors);
                },
            });
        }
    };

    return (
        <>
            <button
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={openModal}
            >
                {id > 0 ? "Editar" : "Crear"}
            </button>
            <Modal show={showModal} onClose={closeModal}>
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        {id > 0 ? "Editar" : "Crear"}
                    </h2>
                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Nombre
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Nombre"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                e-Mail
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Correo electrónico"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Celular
                            </label>
                            <input
                                name="phone"
                                type="text"
                                placeholder="Celular"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.phone}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Dirección
                            </label>
                            <input
                                name="address"
                                type="text"
                                placeholder="Dirección"
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            />
                            {errors.address && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.address}
                                </p>
                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                {id > 0 ? "Actualizar" : "Crear"}
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Cerrar
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
}
