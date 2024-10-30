import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

import IconButton from "@/Components/IconButton";
import eliminarIcon from "/public/delete.png";
import closeIcon from "/public/close.png";

export default function Delete({ id, editorial }) {
    const [showModal, setShowModal] = useState(false);
    const { delete: destroy, processing, errors } = useForm();

    const openModal = () => setShowModal(true);

    const closeModal = (event) => {
        if (event) event.preventDefault();
        setShowModal(false);
    };

    const submit = (event) => {
        event.preventDefault();
        destroy(route("editorials.delete", id), {
            onSuccess: () => {
                setShowModal(false);
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    if (!editorial) {
        return null;
    }

    return (
        <>
            {/* <button
                className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={openModal}
            >
                Borrar
            </button> */}
            <div className="p-1 bg-white-600 rounded-lg shadow-lg">
                <IconButton
                    icon={eliminarIcon}
                    label=""
                    onClick={openModal}
                    className="bg-white-600 hover:bg-gray-200"
                    disabled={false}
                />
            </div>

            <Modal show={showModal} onClose={closeModal}>
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Confirmar Borrado
                    </h2>
                    <p className="mb-4">
                        ¿Estás seguro de que deseas borrar la editorial "
                        <strong>{editorial.name}</strong>"? Esta acción no se
                        puede deshacer.
                    </p>
                    {errors && (
                        <p className="text-red-500 text-xs italic mb-4">
                            {errors.general}
                        </p>
                    )}
                    <div className="flex items-center justify-between">
                        {/* <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            disabled={processing}
                            onClick={submit}
                        >
                            {processing ? "Cargando..." : "Borrar"}
                        </button>
                        <button
                            onClick={closeModal}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cerrar
                        </button> */}

                        <IconButton
                            icon={eliminarIcon}
                            label=""
                            onClick={submit}
                            className="hover:bg-gray-200"
                            disabled={false}
                        />
                        <IconButton
                            icon={closeIcon}
                            label=""
                            onClick={closeModal}
                            className="bg-white-600 hover:bg-gray-200"
                            disabled={false}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
}
