<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Book;

class UserableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $users = User::all();
        foreach($users as $user){
            $user->userables()->create([
                'numer_star' => rand(1, 5),
                'userable_id' => 1,
                'userable_type' => 'App\Models\Book',
            ]);
        }
    }
}
