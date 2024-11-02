<?php

namespace App\Repositories;

use App\Models\Genre;

class GenreRepository {

    public function getAllGenres() {
        return Genre::select('id', 'name')->get();
    }

    


}