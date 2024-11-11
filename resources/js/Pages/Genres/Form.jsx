import Modal from "@/Components/Modal";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { HiMiniPencilSquare } from "react-icons/hi2";
import CreateButton from "@/Components/CreateButton";
import CancelButton from "@/Components/CancelButton";
import { toast } from 'react-toastify';
import es from "@/lang/es";
import en from "@/lang/en";

export default function Form({ lang1='es', id = 0, genre = {} }) {
    const [showModal, setShowModal] = useState(false);
    const { data, setData, errors, post, put } = useForm({ name: '', type: '', description: '' });

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
                    if(res.props.flash.status){
                        toast.success(res.props.flash.message);
                    }
                    else {
                        toast.error(res.props.flash.message);
                    }
                    setShowModal(false);
                },
                onError: (errors) => {
                    toast.error('Existe Errores en el formulario');
                    // console.log(errors);
                },
            })
        }
        else {
            post(route('genres.store'), {
                onSuccess: (response) => {
                    if(res.props.flash.status){
                        toast.success(res.props.flash.message);
                    }
                    else {
                        toast.error(res.props.flash.message);
                    }
                    setShowModal(false);
                },
                onError: (errors) => {
                    toast.error('Existe Errores en el formulario');
                },
            })
        }

    }

    return (
        <>
            {id > 0 ? (
                <button className="text-2xl text-blue-500 hover:text-blue-600" onClick={openModal}><HiMiniPencilSquare /></button>
            ) : (
                <CreateButton type="button" onClick={openModal}>{lang1 === 'es' ? es.button.new_genre : en.button.new_genre }</CreateButton>
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
                        <label>Descripción</label>
                        <input className=" block w-full" name="description" type="text" placeholder="Descripcion" value={data.description} onChange={(e) => setData('description', e.target.value)} />
                        <div className="flex justify-end space-x-2 mt-2">
                            <CreateButton type="submit" onClick={submit}>{ id > 0 ? (
                                lang1 === 'es' ? es.button.edit_genre : en.button.edit_genre
                            )
                            : (
                                lang1 === 'es' ? es.button.save_genre : en.button.save_genre
                            )
                        }</CreateButton>
                            <CancelButton onClick={closeModal}>{lang1 === 'es' ? es.button.cancel : en.button.cancel}</CancelButton>
                        </div>

                    </form>
                </div>


            </Modal>
        </>


    );
}