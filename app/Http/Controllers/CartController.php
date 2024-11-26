<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Book;
use App\Models\Sale;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function index(){
        $books = Book::with('image')->get();
        return Inertia::render('Welcome', ['books' => $books]);
    }

    public function view(){
        return Inertia::render('ViewCart');
    }

    public function store(Request $request){
        
        $request->validate([
            'cart' => 'required|array|min:1'
        ]);
        
        $sale = new Sale();
        $sale->customer_id  = Auth::user()->id;
        $sale->sale_date = now();
        $sale->price = 0;
        $sale->save();

        $total_price = 0;
        foreach($request->cart as $book){
            $sale->books()->attach($book['id'], ['price_sale' => $book['price_sale'], 'quantity' => $book['quantity']]);
            $total_price += $book['price_sale'] * $book['quantity'];
        }
        $sale->price = $total_price;
        $sale->save();
        return Inertia::render('ViewCart', ['status' => true, 'message' => 'Se registro corectamente la compra']);


    }
}
