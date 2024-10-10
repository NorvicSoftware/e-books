<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    use HasFactory;

    protected $table = 'scores';

    protected $fillable = ['puntuacion','fecha_puntuacion','book_id','author_id'];

}
