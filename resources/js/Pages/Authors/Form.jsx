import Modal from "@/Components/Modal";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function Form({ id = 0, author = {} }) {
    const [showModal, setShowModal] = useState(false);
    const { data, setData, errors, post, put } = useForm({
        nationality: "",
        birth_date: "",
        biography: "",
        website: "",
        social_media: "",
        user_id: "",
    });

    const openModal = () => {
        setShowModal(true);
        if (id > 0) setData(author);
    };

    const closeModal = (event) => {
        event.preventDefault();
        setShowModal(false);
    };

    const submit = (event) => {
        event.preventDefault();
        console.log(data);
        if (id > 0) {
            put(route("authors.update", id), {
                onSuccess: () => {
                    setShowModal(false);
                },
                onError: (errors) => {
                    console.log(errors);
                },
            });
        } else {
            post(route("authors.store"), {
                onSuccess: () => {
                    setShowModal(false);
                },
                onError: (errors) => {
                    console.log(errors);
                },
            });
        }
    };

    return (
        <>
            <button onClick={openModal}>
                {id > 0 ? "Editar" : "Crear Autor"}
            </button>
            <Modal show={showModal}>
                <h2>CREAR NUEVO AUTOR</h2>
                <form>
                    <div>
                        <label for="nationality">Nacionalidad</label>
                        <input
                            id="nationality"
                            name="nationality"
                            type="text"
                            placeholder="Ingrese su nacionalidad"
                            value={data.nationality}
                            onChange={(e) =>
                                setData("nationality", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <label for="birth_date">Fecha de Nacimiento</label>
                        <input
                            id="birth_date"
                            name="birth_date"
                            type="date"
                            value={data.birth_date}
                            onChange={(e) =>
                                setData("birth_date", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <label for="biography">Biografía</label>
                        <input
                            id="biography"
                            name="biography"
                            type="text"
                            placeholder="Ingrese su biografía"
                            value={data.biography}
                            onChange={(e) =>
                                setData("biography", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <label for="website">Sitio Web</label>
                        <input
                            id="website"
                            name="website"
                            type="text"
                            placeholder="Ingrese su sitio web"
                            value={data.website}
                            onChange={(e) => setData("website", e.target.value)}
                        />
                    </div>
                    <div>
                        <label for="social_network">Red Social</label>
                        <input
                            id="social_network"
                            name="social_network"
                            type="text"
                            placeholder="Ingrese su red social"
                            value={data.social_network}
                            onChange={(e) =>
                                setData("social_network", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <label for="user_id">Usuario</label>
                        <input
                            id="user_id"
                            name="user_id"
                            type="text"
                            placeholder="Ingrese su id de usuario"
                            value={data.user_id}
                            onChange={(e) => setData("user_id", e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button
                            type="submit"
                            onClick={submit}
                            className="bg-green-500 text-white p-1 rounded-md"
                        >
                            Crear
                        </button>
                        <button onClick={closeModal}>Cerrar</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}
