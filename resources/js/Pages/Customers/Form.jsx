
import { useState } from 'react';
import { useForm } from "@inertiajs/react";
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import UserSelect from '@/Components/UserSelect';
import EditButton from '@/Components/EditButton';

export default function Form({ id = 0, customer = {}, users = {}}){
    const [showModal, setShowModal] = useState(false); 
    const { data, setData, errors, post, put } = useForm({ name: 'Maria Carmen Soto', email:'mariacarmen1@gmail.com', password:'maria123',  nit: '', code: '', user_id: 0, });

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
    return (
        <>
            { id > 0 ? <EditButton onClick={openModal}></EditButton> : <PrimaryButton onClick={openModal}>New Customer</PrimaryButton> }
            <Modal show={showModal}>
                    <button
                        onClick={CloseModal}
                        type="button"
                        className="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-danger hover:text-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:text-danger-700 motion-reduce:transition-none dark:text-danger-600 dark:hover:text-danger-500 dark:focus:text-danger-500 dark:active:text-danger-500">
                        Close
                    </button>
                <div className="mx-auto block max-w-md rounded-lg bg-white p-6 shadow-4">
                    <form>
                        <div className="grid grid-cols-2 gap-4">
                            
                            <TextInput name="nit" placeholder="NIT" value={data.nit} onChange={(e)=> setData('nit', e.target.value)}>
                            </TextInput>
                            
                            <TextInput name="code" placeholder="Client Code" value={data.code} onChange={(e)=>setData('code', e.target.value)}>
                            </TextInput>
                        </div>
                        {/*Select input*/}
                        <div className="relative mb-6" data-twe-input-wrapper-init="">
                            <UserSelect options={users} value={data.user_id} onChange={(e)=>setData('user_id', e.target.value)}></UserSelect>
                        </div>
                        {/*Submit button*/}
                        <button
                        type="submit"
                        className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init=""
                        data-twe-ripple-color="light"
                        onClick={submit}
                        >
                        {id > 0 ? 'Update' : 'Create'} Custumer
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    );
}