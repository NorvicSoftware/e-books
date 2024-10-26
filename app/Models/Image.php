<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Image extends Model
{
    use HasFactory;
    protected $table = 'images';
    protected $fillable = [
        'url',
    ];

    public function imageable(): MorphTo
    {
        return $this->morphTo();  // Assuming imageable models have a polymorphic relationship with this model.  Replace 'imageable' with the actual relationship name.  This assumes 'imageable' has a type column and a foreign key.  If not, adjust the morphTo method accordingly.  The morphTo method is used to define a polymorphic relationship with another model.  In this case, we are defining a polymorphic relationship with a model called 'Book', 'Author', or 'Genre'.  The 'type' column will contain 'book', 'author', or 'genre', and the 'imageable_id' column will contain the ID of the related book, author, or genre.  'imageable_type' will contain the model class name (e.g., 'App\Models\Book', 'App\Models\Author', 'App\Models\Genre').  This allows you to easily query for images related to books, authors,
    }
}
