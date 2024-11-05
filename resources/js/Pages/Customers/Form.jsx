
import { useState } from 'react';
import { useForm } from "@inertiajs/react";
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import EditButton from '@/Components/EditButton';

export default function Form({ id = 0, customer = {}, users = {}}){
    const [showModal, setShowModal] = useState(false); 
    const { data, setData, errors, post, put } = useForm({ 
                                                            nit: '',
                                                            code: '',
                                                            user: {id:'',name:'',email:'', password:''} });

    const openModal = () => {
        setShowModal(true);
        console.log('data in customer: ' + JSON.stringify(customer));
        if (id > 0) setData(customer);
    }
    const CloseModal = () => {
        setShowModal(false);
    }

    const submit = (event) => {
        event.preventDefault();
        console.log(data);
        if (id > 0) {
            console.log(data);
            put(route('customers.update', id), {
                onSuccess: () => {
                    setShowModal(false);
                },
                onError: (errors) => {
                    console.log(errors);
                }
            })
        }
        else {     
            console.log(data);
            post(route('customers.store'), {
                onSuccess: () => {
                    setShowModal(false);
                },
                onError: (errors) => {
                    console.log(errors);
                },
            })
        }
    }

    const headlerUser = (field, value) => {
        const newUser  = { ...data.user, [field]: value };
        setData('user', newUser);
    }
    return (
        <>
            { id > 0 ? <EditButton onClick={openModal}></EditButton> : <PrimaryButton onClick={openModal}>Nuevo Cliente</PrimaryButton> }
            <Modal show={showModal}>
                    <button
                        onClick={CloseModal}
                        type="button"
                        className="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-danger hover:text-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:text-danger-700 motion-reduce:transition-none dark:text-danger-600 dark:hover:text-danger-500 dark:focus:text-danger-500 dark:active:text-danger-500">
                        Cerrar
                    </button>
                <div className="mx-auto block max-w-md rounded-lg bg-white p-6 shadow-4">
                    <form>
                        {Object.keys(errors).length > 0 && (
                            <ul className='my-4 bg-red-100 border border-red-400 text-red-700 rounded-md p-4'>
                                {Object.keys(errors).map((key) => (
                                    <li className='font-bold' key={key}>{errors[key]}</li>
                                ))}
                            </ul>
                        )}
                        <div className="grid grid-cols-2 gap-4">
                            {id <= 0 && (
                            <>
                            <TextInput name="name" placeholder="Nombre" value={data.user.name} onChange={(e)=> headlerUser('name', e.target.value)}>
                            </TextInput>
                            <TextInput type="email" name="email" placeholder="Correo Electronico" value={data.user.email} onChange={(e)=> headlerUser('email', e.target.value)}>
                            </TextInput>
                            <TextInput type="password" name="password" placeholder="Contraseña" value={data.user.password} onChange={(e)=> headlerUser('password', e.target.value)}>
                            </TextInput>
                            </>
                            )}
                            <TextInput name="nit" placeholder="NIT" value={data.nit} onChange={(e)=> setData('nit', e.target.value)}>
                            </TextInput>
                            <TextInput name="code" placeholder="Client Code" value={data.code} onChange={(e)=>setData('code', e.target.value)}>
                            </TextInput>

                        </div>
                        {/*Submit button*/}
                        <button
                        type="submit"
                        className="my-2 inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init=""
                        data-twe-ripple-color="light"
                        onClick={submit}
                        >
                        {id > 0 ? 'Actualizar' : 'Crear'} cliente
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    );
}