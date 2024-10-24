import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Delete({ id, editorial }) {
    const [showModal, setShowModal] = useState(false);
    const { delete: destroy } = useForm();

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = (event) => {
        event.preventDefault();
        setShowModal(false);
    }

    const submit = (event) => {
        event.preventDefault();
        destroy(route('editorials.delete', id), {
            onSuccess: () => {
                setShowModal(false);
            },
            onError: (errors) => {
                console.log(errors);
            },
        }
        );
    }

    return (
        <>
            <button onClick={openModal}>Borrar</button>
            <Modal show={showModal}>
                <form>
                    <h2>BORRAR EDITORIAL</h2>
                    <p>Estas seguro de que deseas borrar el editorial "{editorial.name}"?</p>
                    <button type="submit" onClick={submit}>Borrar</button>
                    <button onClick={closeModal}>Cerrar</button>
                </form>
            </Modal>
        </>
    );

}