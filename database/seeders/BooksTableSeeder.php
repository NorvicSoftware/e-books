<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Book

class BooksTableSeeder extends Seeder
{
    public function run(): void
    {
        db::table('books')->insert([
            [
                'title' => 'El Ingenioso Hidalgo Don Quijote de la Mancha',
                'subtitle' => 'Una obra maestra de Miguel de Cervantes',
                'version' => 1.0,
                'publish_date' => '1605-01-16',
                'price_sale' => 29.99,
                'lenguage' => 'Español',
                'page_number' => 863,
                'ISBN' => rand(),
                'detail' => 'Novela clásica de la literatura española',
                'author_id' => 1,
                'genre_id' => 1,
                'editorial_id' => 1,
            ],
            [
                'title' => 'To Kill a Mockingbird',
                'subtitle' => 'A novel by Harper Lee',
                'version' => 1.0,
                'publish_date' => '1960-07-11',
                'price_sale' => 15.99,
                'lenguage' => 'English',
                'page_number' => 324,
                'ISBN' => rand(),
                'detail' => 'A gripping, heart-wrenching story about racial injustice',
                'author_id' => 2,
                'genre_id' => 2,
                'editorial_id' => 2,
            ],
        ]);
    }
}
