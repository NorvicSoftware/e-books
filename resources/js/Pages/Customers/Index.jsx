
import { usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia'; 
import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteButton from '@/Components/DeleteButton';
import TextInput from '@/Components/TextInput';
import Form from './Form';

export default function Index() {
    const {customers} = usePage().props;
    const [searchCustomer, setSeachCustomer] = useState('');
    
    console.log(customers);
    const filterCustomer = customers.filter(customer => 
        customer.user['name'].toLowerCase().includes(searchCustomer.toLowerCase()));
        
    //delete item function
    function destroyItem(id) {
        if(confirm('¿Estas seguro que quieres eliminar a este cliente?')){
            Inertia.delete(route('customers.delete', id),{
                onSuccess: () => {
                    Inertia.visit(route('customers.index'));
                },
                onError: (errors) => {
                    console.log(errors);
                }
            });
        }
    }

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Clientes</h2>}>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className=" flex justify-between">
                                <TextInput className="m-2" type="text" placeholder="Buscar..." onChange={(e) => setSeachCustomer(e.target.value)} />
                                <Form />
                            </div>
                            <table className="min-w-full text-center text-sm font-light text-surface dark:text-white">
                                <thead className="border-b border-neutral-200 bg-[#332D2D] font-medium text-white dark:border-white/10">
                                    <tr>
                                    <th scope="col" className=" px-6 py-4">
                                        ID
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                        Nombre
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                        NIT
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                        Codigo
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                        Correo
                                    </th>
                                    <th scope="col" className=" px-6 py-4">
                                        Acciones
                                    </th>
                                    </tr>
                                </thead>
                                <tbody className='text-black'>
                                    {filterCustomer.map((customer) => (
                                        <tr key={customer.id} className="border-b border-neutral-200 dark:border-white/10">
                                            <td className="whitespace-nowrap  px-6 py-4 font-medium">{customer.id}</td>
                                            <td className="whitespace-nowrap  px-6 py-4">{customer.user.name}</td>
                                            <td className="whitespace-nowrap  px-6 py-4">{customer.code}</td>
                                            <td className="whitespace-nowrap  px-6 py-4">{customer.nit}</td>
                                            <td className="whitespace-nowrap  px-6 py-4">{customer.user.email}</td>
                                            <td className="whitespace-nowrap  px-6 py-4">
                                                <Form id={customer.id} customer={customer} />
                                                <DeleteButton onClick={(e) => {
                                                    e.stopPropagation();
                                                    destroyItem(customer.user_id);
                                                }}></DeleteButton>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}