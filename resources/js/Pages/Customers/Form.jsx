
import { useState } from 'react';
import { useForm } from '@inertiajs/inertia'
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import UserSelect from '@/Components/UserSelect';

export default function Form({ id = 0, users = {}}){
    const [showModal, setShowModal] = useState(false); 

    const openModal = () => {
        setShowModal(true);
    }
    const CloseModal = () => {
        setShowModal(false);
    }
    return (
        <>
            <PrimaryButton onClick={openModal}>New Customer</PrimaryButton>
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
                            
                            <TextInput name="nit" placeholder="NIT"></TextInput>
                            
                            <TextInput name="code" placeholder="Client Code"></TextInput>
                        </div>
                        {/*Select input*/}
                        <div className="relative mb-6" data-twe-input-wrapper-init="">
                            <UserSelect options={users} placeholder="User"></UserSelect>
                        </div>
                        {/*Submit button*/}
                        <button
                        type="submit"
                        className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init=""
                        data-twe-ripple-color="light"
                        >
                        Create Custumer
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    );
}