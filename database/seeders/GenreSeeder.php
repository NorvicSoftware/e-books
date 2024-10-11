<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Genre;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Genre::create([
            'name' => 'Narrativo',
            'description' => 'Genero Narrativo'
        ]);

        Genre::create([
            'name' => 'Dramático',
            'description' => 'Genero Dramático'
        ]);

        Genre::create([
            'name' => 'Didáctico',
            'description' => 'Genero Didáctico'
        ]);
    }
}