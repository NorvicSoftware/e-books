import Modal from "@/Components/Modal";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function Form({ id = 0, user = {} }) {
    const [showModal, setShowModal] = useState(false);
    const { data, setData, errors, post, put } = useForm({
        name: "",
        email: "",
    });

    const openModal = () => {
        setShowModal(true);
        if (id > 0) setData(user);
    };

    const closeModal = (event) => {
        event.preventDefault();
        setShowModal(false);
    };

    const submit = (event) => {
        event.preventDefault();
        console.log(data);
        if (id > 0) {
            put(route("users.update", id), {
                onSuccess: () => {
                    setShowModal(false);
                },
                onError: (errors) => {
                    console.log(errors);
                },
            });
        } else {
            post(route("users.store"), {
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
                {id > 0 ? "Editar" : "Crear Usuario"}
            </button>
            <Modal show={showModal}>
                <h2>CREAR NUEVO USUARIO</h2>
                <form>
                    <div>
                        <label for="name">Nombre</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="ingrese su nombre"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                    </div>
                    <div>
                        <label for="email">Correo Electrónico</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Ingrese su correo electrónico"
                            required
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </div>
                    {id === 0 && (
                        <div>
                            <label for="password">Contraseña</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Ingrese su contraseña"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                        </div>
                    )}
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
