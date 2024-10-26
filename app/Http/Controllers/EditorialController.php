<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Editorial;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class EditorialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $editorials = Editorial::all();
        return Inertia::render('Editorials/Index', ['editorials' => $editorials]);
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
        // Validación de los datos
        $validated = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:35|unique:editorials,name',
            'email' => 'required|max:75|email|unique:editorials,email',
            'phone' => 'nullable|string|min:8|max:20',
            'address' => 'nullable|string',
        ])->validate();

        try {
            Editorial::create($validated);
            return Redirect::route('editorials.index')->with('success', 'Editorial creada exitosamente.');
        } catch (\Exception $e) {
            return Redirect::route('editorials.create')->with('error', 'Error al crear la editorial: ' . $e->getMessage());
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $editorial = Editorial::findOrFail($id);
        return Inertia::render('Editorials/Edit', ['editorial' => $editorial]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $editorial = Editorial::findOrFail($id);

        $validated = Validator::make($request->all(), [
            'name' => "required|string|min:2|max:35|unique:editorials,name,$id",
            'email' => "required|max:75|email|unique:editorials,email, $id",
            'phone' => 'nullable|string|min:8|max:20',
            'address' => 'nullable|string',
        ])->validate();

        try {
            $editorial->update($validated);
            return Redirect::route('editorials.index')->with('success', 'Editorial actualizada exitosamente.');
        } catch (\Exception $e) {
            return Redirect::route('editorials.edit', $id)->with('error', 'Error al actualizar la editorial: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $editorial = Editorial::findOrFail($id);
            $editorial->delete();
            return Redirect::route('editorials.index')->with('success', 'Editorial eliminada exitosamente.');
        } catch (\Exception $e) {
            return Redirect::route('editorials.index')->with('error', 'Error al eliminar la editorial: ' . $e->getMessage());
        }
    }
}
