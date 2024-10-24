<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Editorial;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class EditorialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $editorials = Editorial::all();
        return Inertia::render('Editorials/Index', ['editorials' => $editorials]);
        // return view ('editorials/list', compact('editorials'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Editorials/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $editorial = new Editorial();
        $editorial->name = $request->name;
        $editorial->email = $request->email;
        $editorial->phone = $request->phone;
        $editorial->address = $request->address;
        $editorial->save();
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
        $editorial = Editorial::find($id);
        $editorial->name = $request->name;
        $editorial->email = $request->email;
        $editorial->phone = $request->phone;
        $editorial->address = $request->address;
        $editorial->save();

        return Redirect::route('editorials.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $editorial = Editorial::find($id);
        $editorial->delete();
        return Redirect::route('editorials.index');
    }
}
