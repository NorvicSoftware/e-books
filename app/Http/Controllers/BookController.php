<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Genre;
use App\Models\Editorial;
use App\Repositories\GenreRepository;
use App\Repositories\EditorialRepository;

class BookController extends Controller
{
    protected $genres;
    protected $editorials;

    public function __construct(GenreRepository $genres, EditorialRepository $editorials){
        $this->genres = $genres;
        $this->editorials = $editorials;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::where('author_id', Auth::user()->id)->get();
        return Inertia::render('Books/Index', ['books' => $books]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $genres = Genre::select('id', 'name')->get();
        // $editorials = Editorial::select('id', 'name')->get();

        return Inertia::render('Books/Form', ['genres' => $this->genres->getAllGenres(), 'editorials'=> $this->editorials->getAllEditorial()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate( [
            'title' => ['required','min:3','max:75'],
            'subtitle' => ['required'],
            'price_sale' => ['required','numeric','min:0.1'],
            'publish_date' => ['required'],
            'version' => ['required','numeric'],
            'page_number' => ['required'],
            'isbn' => ['required'],
            'language' => ['required'],
            'genre_id' => ['required','numeric'],
            'editorial_id' => ['required','numeric'],
        ]);
        $book = new Book();
        $book->title = $request->title;
        $book->subtitle = $request->subtitle;
        $book->price_sale = $request->price_sale;
        $book->publish_date = $request->publish_date;
        $book->version = $request->version;
        $book->page_number = $request->page_number;
        $book->ISBN = $request->isbn;
        $book->language = $request->language;
        $book->author_id = Auth::user()->id;
        $book->genre_id = $request->genre_id;
        $book->editorial_id = $request->editorial_id;
        $book->save();


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
        // $genres = Genre::select('id', 'name')->get();
        // $editorials = Editorial::select('id', 'name')->get();
        return Inertia::render('Books/Form', ['genres' => $this->genres->getAllGenres(), 'editorials'=> $this->editorials->getAllEditorial()]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
