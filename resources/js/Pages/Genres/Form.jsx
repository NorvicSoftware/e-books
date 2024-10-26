import Modal from "@/Components/Modal";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { HiMiniPencilSquare } from "react-icons/hi2";
import CreateButton from "@/Components/CreateButton";
import CancelButton from "@/Components/CancelButton";

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
            put(route('genres.update', id), {
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
            {id > 0 ? (
                <button className="text-2xl text-blue-500 hover:text-blue-600" onClick={openModal}><HiMiniPencilSquare /></button>
            ) : (
                <CreateButton type="button" onClick={openModal}>Crear Genero</CreateButton>
                // <button className="bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white rounded-md font-semibold" onClick={openModal}>Crear Genero</button>
            )}
            <Modal show={showModal}>
                <div className="p-4">
                    <h2 className=" font-semibold text-red-600">{ id > 0 ? "EDITAR GENERO LITERARIO": "CREAR GENERO LITERARIO"}</h2>
                    <form>
                        <label>Nombre</label>
                        <input className=" block w-full border border-gray-400 rounded-md" name="name" type="text" placeholder="Nombre" value={data.name} onChange={(e) => setData('name', e.target.value)} maxLength={35} required />
                        {errors.name && (
                            <p className=" text-red-500">{errors.name}</p>
                        )}
                        {/* <label>Tipo</label> */}
                        {/* <input className=" block w-full" name="type" type="text" placeholder="Tipo" value={data.type} onChange={(e) => setData('type', e.target.value)} maxLength={35} /> */}
                        {/* <select  className="block w-full" value={data.type} onChange={(e) => setData('type', e.target.value)}>
                            <option value="">Seleccione un tipo</option>
                            <option value="Fantástico">Fantástico</option>
                            <option value="Terror">Terror</option>
                            <option value="Misterio">Misterio</option>
                            <option value="Romance">Romance</option>
                            <option value="Drama">Drama</option>
                            <option value="Ciencia Ficción">Ciencia Ficción</option>
                            <option value="Otros">Otros</option>
                        </select>
                        {errors.type && (
                            <p className=" text-red-500">{errors.type}</p>
                        )} */}
                        <label>Descripción</label>
                        <input className=" block w-full" name="description" type="text" placeholder="Descripcion" value={data.description} onChange={(e) => setData('description', e.target.value)} />
                        <div className="flex justify-end space-x-2 mt-2">
                            <CreateButton type="submit" onClick={submit}>{ id > 0 ? "Actualizar genero": "Guardar genero"}</CreateButton>
                            <CancelButton onClick={closeModal}>Cerrar</CancelButton>
                        </div>

                    </form>
                </div>


            </Modal>
        </>


    );
}