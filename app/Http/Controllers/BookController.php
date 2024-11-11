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
use App\Mail\NewBookMail;
use Illuminate\Support\Facades\Mail;
use App\Models\Customer;
use App\Repositories\CustomerRepository;
use Illuminate\Support\Facades\DB;

class BookController extends Controller
{
    protected $genres;
    protected $editorials;
    protected $customers;

    public function __construct(GenreRepository $genres, EditorialRepository $editorials, CustomerRepository $customers){
        $this->genres = $genres;
        $this->editorials = $editorials;
        $this->customers = $customers;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::with(['image', 'genre', 'editorial', 'author.user'])->where('author_id', Auth::user()->id)->get();
        return Inertia::render('Books/Index', ['books' => $books]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
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
            'file_name' => ['required|file|mimes:png,jpg,jpeg'],
        ]);

        try {

            DB::beginTransaction();

            $book = new Book();
            $book->title = $request->title;
            $book->subtitle = $request->subtitle;
            $book->price_sale = $request->price_sale;
            $book->publish_date = $request->publish_date;
            $book->version = $request->version;
            $book->page_number = $request->page_number;
            $book->isbn = $request->isbn;
            $book->language = $request->language;
            $book->author_id = Auth::user()->id;
            $book->genre_id = $request->genre_id;
            $book->editorial_id = $request->editorial_id;
            $book->detail = $request->detail;
            $book->save();

            if ($request->hasFile('image')) {
                $image_path = 'public/images';
                $image = $request->file('image');
                $name_image = time() . "-" . $image->getClientOriginalName();
                $request->file('image')->storeAs($image_path, $name_image);

                $book->image()->create(['url' => $name_image]);
            }
    
            // $customers = $this->customers->getAllCustomer();
            // foreach($customers as $customer){
            //     Mail::to($customer->user->email)->send(new NewBookMail($book, $customer));
            // }

            DB::commit();
    
            return Redirect::route('books.index');
        }
        catch(\Exception $e){
            DB::rollback();
            return redirect()->back()->withInput()->withErrors(['error' => 'Error al crear el libro' . $e->getMessage()]);
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
