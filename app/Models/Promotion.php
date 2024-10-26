<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Promotion extends Model
{
    use HasFactory;
    protected $table = 'promotions';
    protected $fillable = [
        'name',
        'discount',
        'from_date',
        'end_date'
    ];

    public function sales(): HasMany
    {
        return $this->hasMany(Sale::class);
    }
}
