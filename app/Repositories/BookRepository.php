<?php

namespace App\Repositories;

use App\Models\Book;
use App\Models\Author;

class BookRepository {

    public function getAuthorCountBooks($nationality, $author, $count){
        $authors = Author::query();
        $authors->with('user')->withCount('books');
        $authors->when((!is_null($nationality) && $nationality !== 'Todos'), function ($query) use ($nationality){
            return $query->where('nationality', '=', $nationality);
        });
        $authors->when((!is_null($author) && $author !== 'Todos'), function ($query) use ($author){
            return $query->whereHas('user', function ($query) use ($author){
                return $query->where('name', 'LIKE', '%' . $author . '%');
            });
        });
        return $authors->get();
    }

    


}