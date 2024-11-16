<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Author;
use App\Models\Book;
use Inertia\Inertia;



class ReportAuthorBooksController extends Controller
{
    public function list()
    {
        $authors = Author::with('user')->get();
        foreach ($authors as $index => $author) {
            $authors[$index]->books_count = Book::where('author_id', $author->id)->count();
        }
        return Inertia::render('Reports/Books/List', ['authors' => $authors]);
    }

    public function search(Request $request)
    {
        if ($request->author !== '') {
            $authors =  Author::whereHas('user', function ($query) use ($request) {
                $query->where('name', 'like',  '%'. $request->author . '%');
            })->with('user')->where('nationality', $request->nationality)->get();

            // $authors->get();
        }
        if ($request->nationality !== '') {
            $authors =  Author::whereHas('user', function ($query) use ($request) {
                $query->where('name', 'like',  '%'. $request->author . '%');
            })->with('user')->where('nationality', $request->nationality)->get();

            // $authors->get();
        }
        if ($request->count !== '') {
            $authors =  Author::whereHas('user', function ($query) use ($request) {
                $query->where('name', 'like',  '%'. $request->author . '%');
            })->with('user')->where('nationality', $request->nationality)->get();

            // $authors->get();
        }
        else{
            $authors = Author::with('user')->where('nationality', $request->nationality)->get();
            // $authors->get();
        }

        foreach ($authors as $index => $author) {
            $authors[$index]->books_count = Book::where('author_id', $author->id)->count();
        }
        return Inertia::render('Reports/Books/List', ['authors' => $authors]);
    }
}
