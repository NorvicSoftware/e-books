import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import CancelButton from "@/Components/CancelButton";
import CreateButton from "@/Components/CreateButton";

export default function Delete({ id, genre }) {
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
        destroy(route('genres.delete', id), {
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
            <button className="text-red-500 hover:text-red-600 text-xl" onClick={openModal}><FaRegTrashAlt /></button>
            <Modal show={showModal}>
                <div className="m-4">
                    <form>
                        <h2 className="text-red-600 font-semibold">BORRAR GENERO LITERARIO</h2>
                        <p className="text-xl m-6">Estas seguro de que deseas borrar el genero literario "{genre.name}"?</p>
                        <div className="flex justify-end space-x-2">
                            <CreateButton type="submit"  onClick={submit} >Borrar Genero</CreateButton>
                            <CancelButton onClick={closeModal}>Cerrar</CancelButton>
                        </div>

                    </form>
                </div>

            </Modal>
        </>
    );

}