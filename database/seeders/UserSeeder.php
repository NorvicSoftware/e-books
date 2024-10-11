<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = new User();
        $user->name = 'Luis Perez';
        $user->email = 'luis@email.com';
        $user->email_verified_at ="2024-10-10";
        $user->password = bcrypt('password');
        $user->remember_token = 'nNFLQjr89Qt';
        $user->save();
    }
}