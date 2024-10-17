<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Book extends Model
{
    use HasFactory;
    protected $table = 'books';
    protected $fillable = [
        'title',
        'subtitle',
        'version',
        'publish_date',
        'price_sale',
        'lenguage',
        'page_number',
        'ISBN',
        'author_id',
        'genre_id',
        'editorial_id'
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class);
    }

    public function editorial(): BelongsTo
    {
        return $this->belongsTo(Editorial::class);
    }

    public function genre(): BelongsTo
    {
        return $this->belongsTo(Genre::class);
    }

    public function sales() :BelongsToMany {
        return $this->belongsToMany(Sale::class);
    }

    public function image(): MorphMany
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function scores(): MorphMany {
        return $this->morphMany(Score::class, 'scoreable');
    }

    // public function users(){
    //     return $this->morphToMany(User::class, 'userable');
    // }
}
