<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Book;

class CartController extends Controller
{
    public function index(){
        $books = Book::with('image')->get();
        return Inertia::render('Welcome', ['books' => $books]);
    }

    public function view(){
        return Inertia::render('ViewCart');
    }
}
