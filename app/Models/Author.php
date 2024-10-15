<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Author extends Model
{
    use HasFactory;
    protected $table = 'authors';
    protected $fillable = [
        'nationality', 'birth_date', 'biography', 'website', 'social_network', 'user_id'
    ];

    public function user (): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function books(): HasMany {
        return $this->hasMany(Book::class);
    }

    public function image(): MorphOne {
        return $this->morphOne(Image::class, 'imageable');
    }



    public function comment(){
        return $this->morphMany(Comment::class, 'commentable');
    }


}