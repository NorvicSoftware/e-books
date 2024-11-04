<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

use App\Models\Customer;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $customers = Customer::with(['user:id,name,email'])->get();
        return Inertia::render('Customers/Index', [
            'customers' => $customers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user.name' => 'required|min:5|max:50',
            'user.email' => 'required|min:5|max:70',
            'user.password' => 'required|min:8',
            'nit' => 'required|numeric',
            'code' => 'required',
        ]);

        $user = new User();
        $user->name = $request->user['name'];
        $user->email = $request->user['email'];
        $user->password = Hash::make($request->user['password']);
        $user->save();

        $customer = new Customer();
        $customer->nit = $request->nit;
        $customer->code = $request->code;
        $customer->user_id = $user->id;
        $customer->save();

        return Redirect::route('customers.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nit' => 'required|numeric',
            'code' => 'required',
        ]);
        $customer = Customer::find($id);
        $customer->nit = $request->nit;
        $customer->code = $request->code;
        $customer->user_id = $request->user_id;
        $customer->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $user_id)
    {
        $user = User::find($user_id);
        $user->delete();
        // $customer = Customer::find($id);
        // $customer->delete();
        return Redirect::route('customers.index');
    }
}