import Modal from "@/Components/Modal";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { HiMiniPencilSquare } from "react-icons/hi2";

export default function Form({ id = 0, genre = {} }) {
    const [showModal, setShowModal] = useState(false);
    const { data, setData, errors, post, put } = useForm({ name: '', type: '', description: '' });

    // function openModal() {

    // }

    const openModal = () => {
        setShowModal(true);
        if (id > 0) setData(genre);
    }

    const closeModal = (event) => {
        event.preventDefault();
        setShowModal(false);
    }

    const submit = (event) => {
        event.preventDefault();
        console.log(data);
        if (id > 0) {
            put(route('genres.update', id),  {
                onSuccess: () => {
                    setShowModal(false);
                },
                onError: (errors) => {
                    console.log(errors);
                },
            })
        }
        else {
            post(route('genres.store'), {
                onSuccess: (response) => {
                    console.log(response);
                    setShowModal(false);
                },
                onError: (errors) => {
                    console.log(errors);
                },
            })
        }

    }

    return (
        <>
            <button onClick={openModal}>{id > 0 ? <HiMiniPencilSquare /> : 'Crear Genero'}</button>
            <Modal show={showModal}>
                <h2>CREAR GENERO LITERARIO</h2>
                <form>
                    <label>Nombre</label>
                    <input name="name" type="text" placeholder="Nombre" value={data.name} onChange={(e) => setData('name', e.target.value)} maxLength={35}  required />
                    { errors.name && (
                        <p className=" text-red-500">{errors.name}</p>
                    )}
                    <label>Tipo</label>
                    <input name="type" type="text" placeholder="Tipo" value={data.type} onChange={(e) => setData('type', e.target.value)} maxLength={35} />
                    { errors.type && (
                        <p className=" text-red-500">{errors.type}</p>
                    )}
                    <label>Descripción</label>
                    <input name="description" type="text" placeholder="Descripcion" value={data.description} onChange={(e) => setData('description', e.target.value)} />
                    <button type="submit" onClick={submit}>Crear</button>
                    <button onClick={closeModal}>Cerrar</button>
                </form>

            </Modal>
        </>


    );
}