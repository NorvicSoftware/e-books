<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $authors = Author::all();
        return Inertia::render('Authors/Index', ['authors' => $authors]);
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
        $author = new Author();
        $author->nationality = $request->nationality;
        $author->birth_date = $request->birth_date;
        $author->biography = $request->biography;
        $author->website = $request->website;
        $author->social_network = $request->social_network;
        $author->user_id = $request->user_id;
        $author->save();

        return Redirect::route('authors.index');
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
        $author = Author::find($id);
        $author->nationality = $request->nationality;
        $author->birth_date = $request->birth_date;
        $author->biography = $request->biography;
        $author->website = $request->website;
        $author->social_network = $request->social_network;
        $author->user_id = $request->user_id;
        $author->save();

        return Redirect::route('authors.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $author = Author::find($id);
        $author->delete();
        return Redirect::route('authors.index');
    }
}
