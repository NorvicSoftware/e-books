<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Author;
use App\Models\Book;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Exports\AuthorBookExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Repositories\BookRepository;



class ReportAuthorBooksController extends Controller
{
    protected $books;

    public function __construct(BookRepository $books){
        $this->books = $books;
    }
    public function list()
    {

        $authors = Author::with('user')->withCount('books')->get();
        return Inertia::render('Reports/Books/List', ['authors' => $authors]);
    }

    public function search(Request $request)
    {
        return Inertia::render('Reports/Books/List', ['authors' => $this->books->getAuthorCountBooks($request->nationality, $request->author, $request->count)]);
    }

    public function pdf($nationality , $author, $count) {
        
        $data = [
            'authors' => $this->books->getAuthorCountBooks($nationality, $author, $count),
        ];
        $pdf = PDF::loadView('reports.books.pdf', $data);
        return $pdf->download('reportes_autores_libros.pdf');
    }

    public function excel ($nationality, $author, $count) {
        return Excel::download(new AuthorBookExport($this->books->getAuthorCountBooks($nationality, $author, $count)), 'reportes_autores_libros.xlsx');



    }
}
