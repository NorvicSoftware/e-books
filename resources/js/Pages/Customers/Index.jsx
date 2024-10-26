
import { usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia'; 
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteButton from '@/Components/DeleteButton';
import Form from './Form';

export default function Index() {
    const {customers} = usePage().props;
    const UserOptions = customers.map(customer => ({
        value: customer.user_id,
        label: customer.user.name,
    }));

    function destroyItem(id) {
        if(confirm('¿Are you sure you want to delete customer?')){
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
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Customers</h2>}>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                       <Form users={UserOptions} />
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light text-surface dark:text-white">
                            <thead className="border-b border-neutral-200 bg-[#332D2D] font-medium text-white dark:border-white/10">
                                <tr>
                                <th scope="col" className=" px-6 py-4">
                                    ID
                                </th>
                                <th scope="col" className=" px-6 py-4">
                                    Name
                                </th>
                                <th scope="col" className=" px-6 py-4">
                                    Email
                                </th>
                                <th scope="col" className=" px-6 py-4">
                                    NIT
                                </th>
                                <th scope="col" className=" px-6 py-4">
                                    Code
                                </th>
                                <th scope="col" className=" px-6 py-4">
                                    Actions
                                </th>
                                </tr>
                            </thead>
                            <tbody className='text-black'>
                                {customers.map((customer) => (
                                    <tr key={customer.id} className="border-b border-neutral-200 dark:border-white/10">
                                        <td className="whitespace-nowrap  px-6 py-4 font-medium">{customer.id}</td>
                                        <td className="whitespace-nowrap  px-6 py-4">{customer.user.name}</td>
                                        <td className="whitespace-nowrap  px-6 py-4">{customer.user.email}</td>
                                        <td className="whitespace-nowrap  px-6 py-4">{customer.nit}</td>
                                        <td className="whitespace-nowrap  px-6 py-4">{customer.code}</td>
                                        <td className="whitespace-nowrap  px-6 py-4">
                                            <Form id={customer.id} customer={customer} users={UserOptions} />
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