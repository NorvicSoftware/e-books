<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Editorial;
use App\Models\Author;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(GenreSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(CommentSeeder::class);
        $this->call(AuthorSeeder::class);
        $this->call(CustomerSeeder::class);
        $this->call(SaleSeeder::class);
        // $this->call(UserableSeeder::class);
        Editorial::factory(100)->create();
        User::factory(50)->create();
        Author::factory(50)->create();
    }
}
