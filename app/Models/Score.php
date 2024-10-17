<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
class Score extends Model
{
    use HasFactory;

    protected $table = 'scores';

    protected $fillable = ['score','score_date','book_id','author_id'];

    public function scoreable(): MorphTo {
        return $this->morphTo();
    }
}