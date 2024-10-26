import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Delete({ id, user }) {
    const [showModal, setShowModal] = useState(false);
    const { delete: destroy } = useForm();

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = (event) => {
        event.preventDefault();
        setShowModal(false);
    };

    const submit = (event) => {
        event.preventDefault();
        destroy(route("users.delete", id), {
            onSuccess: () => {
                setShowModal(false);
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    return (
        <div className="flex">
            <button
                onClick={openModal}
                className="bg-red-500 text-white p-1 rounded-md"
            >
                Borrar
            </button>
            <Modal show={showModal}>
                <form>
                    <h2>BORRAR USUARIO</h2>
                    <p>
                        ¿Estás seguro de que deseas borrar el usuario "
                        {user.name}"?
                    </p>
                    <button type="submit" onClick={submit}>
                        Borrar
                    </button>
                    <button onClick={closeModal}>Cerrar</button>
                </form>
            </Modal>
        </div>
    );
}
