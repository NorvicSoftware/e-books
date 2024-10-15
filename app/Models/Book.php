<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $table = 'books';
    protected $fillable = [
        'title', 'subtitle', 'version', 'publish_date', 'price_sale', 'lenguage', 'page_number', 'ISBN', 'author_id', 'genre_id', 'editorial_id'
    ];

    public function comment(){
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function users(){
        return $this->morphToMany(User::class, 'userable');
    }
}