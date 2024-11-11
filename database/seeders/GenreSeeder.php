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
            'name' => 'Ciencia Ficción',
            'description' => 'Genero Ciencia Ficción'
        ]);

        Genre::create([
            'name' => 'Fantasía',
            'description' => 'Genero Fantasía'
        ]);

        Genre::create([
            'name' => 'Biografía',
            'description' => 'Genero Biografía'
        ]);

        Genre::create([
            'name' => 'Ciencia',
            'description' => 'Genero Ciencia'
        ]);

        Genre::create([
            'name' => 'Documental',
            'description' => 'Genero Documental'
        ]);

        Genre::create([
            'name' => 'Cómics',
            'description' => 'Genero Cómics'
        ]);
    }
}
