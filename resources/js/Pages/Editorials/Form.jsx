import Modal from "@/Components/Modal";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function Form({ id = 0, editorial = {} }) {
    const [showModal, setShowModal] = useState(false);
    const { data, setData, errors, post, put } = useForm({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    // function openModal() {

    // }

    const openModal = () => {
        setShowModal(true);
        if (id > 0) setData(editorial);
    };

    const closeModal = (event) => {
        event.preventDefault();
        setShowModal(false);
    };

    const submit = (event) => {
        event.preventDefault();
        console.log(data);
        if (id > 0) {
            put(route("editorials.update", id), {
                onSuccess: () => {
                    setShowModal(false);
                },
                onError: (errors) => {
                    console.log(errors);
                },
            });
        } else {
            post(route("editorials.store"), {
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
            <button onClick={openModal}>{id > 0 ? "Editar" : "Crear"}</button>
            <Modal show={showModal}>
                <h2>CREAR EDITORIAL</h2>
                <form>
                    <label>Nombre</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Nombre"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <label>e-Mail</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Correo electronico"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <label>Celular</label>
                    <input
                        name="phone"
                        type="text"
                        placeholder="Celular"
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                    />
                    <label>Dirección</label>
                    <input
                        name="address"
                        type="text"
                        placeholder="Dirección"
                        value={data.address}
                        onChange={(e) => setData("address", e.target.value)}
                    />
                    <button type="submit" onClick={submit}>
                        Crear
                    </button>
                    <button onClick={closeModal}>Cerrar</button>
                </form>
            </Modal>
        </>
    );
}
