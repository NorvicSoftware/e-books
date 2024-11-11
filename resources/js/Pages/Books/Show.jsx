import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaBookReader } from "react-icons/fa";
import CancelButton from "@/Components/CancelButton";

export default function Show({ book }) {
    const [showModal, setShowModal] = useState(false);

    console.log(book);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = (event) => {
        event.preventDefault();
        setShowModal(false);
    }

    return (
        <>
            <button className="text-blue-500 hover:text-blue-600 text-xl" onClick={openModal}><FaBookReader /></button>
            <Modal show={showModal}>
                <div className="m-4">
                    <form>
                        <h2 className="text-red-600 font-semibold">DETALLES DEL LIBRO</h2>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <div>
                                <img src={'/storage/images/' + book.image[0].url} className="w-full h-64 object-cover" />
                            </div>
                            <div>
                            <p className="text-sm font-medium text-gray-800">Título: { book.title }</p>
                            <p className="text-sm font-medium text-gray-800">Subtítulo: { book.subtitle }</p>
                            <p className="text-sm font-medium text-gray-800">Autor: { book.author?.user?.name }</p>
                            <p className="text-sm font-medium text-gray-800">Precio de venta: { book.price_sale }</p>
                            <p className="text-sm font-medium text-gray-800">Año de publicación: { book.publication_year }</p>
                            <p className="text-sm font-medium text-gray-800">ISBN: { book.isbn }</p>
                            <p className="text-sm font-medium text-gray-800">Genero: { book.genre?.name }</p>
                            <p className="text-sm font-medium text-gray-800">Editorial: { book.editorial?.name }</p>
                            </div>

                        </div>
                        
                        <div className="flex justify-end">
                            <CancelButton onClick={closeModal}>Cerrar</CancelButton>
                        </div>

                    </form>
                </div>

            </Modal>
        </>
    );

}