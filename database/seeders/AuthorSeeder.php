<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $author1 = new Author();
        $author1->nationality = "Bolivia";
        $author1->birth_date = "1990-12-01";
        $author1->biography = "Nacio en la ciudad de Cochabamba, Bolivia, mayor de tres hermanos, autor de varios libros de novela";
        $author1->website = "https://www.google.com";
        $author1->social_network = "https://www.facebook.com";
        $author1->user_id = User::all()->random()->id;
        $author1->save();

        $author2 = new Author();
        $author2->nationality = "Bolivia";
        $author2->birth_date = "1990-12-01";
        $author2->biography = "Nacio en la ciudad de Sucre, Bolivia, mayor de tres hermanos, autor de varios libros de novela";
        $author2->website = "https://www.google.com";
        $author2->social_network = "https://www.facebook.com";
        $author2->user_id = User::all()->random()->id;
        $author2->save();

        $author3 = new Author();
        $author3->nationality = "Argentina";
        $author3->birth_date = "1990-12-01";
        $author3->biography = "Nacio en la ciudad de Buenos Aires, Argentina, mayor de tres hermanos, autor de varios libros de novela";
        $author3->website = "https://www.google.com";
        $author3->social_network = "https://www.facebook.com";
        $author3->user_id = User::all()->random()->id;
        $author3->save();

        $author4 = new Author();
        $author4->nationality = "Colombia";
        $author4->birth_date = "1990-12-01";
        $author4->biography = "Nacio en la ciudad de Bogota, Colombia, mayor de tres hermanos, autor de varios libros de novela";
        $author4->website = "https://www.google.com";
        $author4->social_network = "https://www.facebook.com";
        $author4->user_id = User::all()->random()->id;
        $author4->save();

        $author5 = new Author();
        $author5->nationality = "Peru";
        $author5->birth_date = "1990-12-01";
        $author5->biography = "Nacio en la ciudad de Lima, Peru, mayor de tres hermanos, autor de varios libros de novela";
        $author5->website = "https://www.google.com";
        $author5->social_network = "https://www.facebook.com";
        $author5->user_id = User::all()->random()->id;
        $author5->save();
    }
}
