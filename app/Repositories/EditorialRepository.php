<?php

namespace App\Repositories;

use App\Models\Editorial;

class EditorialRepository {
    public function getAllEditorial(){
        return Editorial::select('id', 'name')->get();
    }
}