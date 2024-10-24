<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Genre;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use \Exception;

class GenreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $genres = Genre::all();
        //$genres = Genre::where('type', '=', 'Alternativa')->orderBy('name', 'asc')->get();
        return Inertia::render('Genres/Index', ['genres' => $genres]);
        // return view ('genres/list', compact('genres'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Genres/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3|max:35|unique:genres,name',
            'type' => 'required'
        ]);

        try{
            $genre = new Genre();
            $genre->name = $request->name;
            $genre->description = $request->description;
            $genre->type = $request->type;
            $genre->save();
    
            return Redirect::route('genres.index')->with(['message' => "Se registro un nuevo genero literario."]);
        }
        catch (Exception $e){
            Redirect::route('genres.index')->with(['message' => "Existe errores en el servidor..."]);
        }

        
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
        $genre = Genre::find($id);
        $genre->name = $request->name;
        $genre->type = $request->type;
        $genre->description = $request->description;
        $genre->save();

        return Redirect::route('genres.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $genre = Genre::find($id);
        $genre->delete();
        return Redirect::route('genres.index');
    }
}