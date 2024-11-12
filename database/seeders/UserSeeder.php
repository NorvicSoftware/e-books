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
        $user->name = 'Victor Peña';
        $user->email = 'victor@gmail.com';
        $user->email_verified_at ="2024-10-10";
        $user->password = bcrypt('Admin123');
        $user->remember_token = 'nNFLQjr89Qt';
        $user->save();

        $user->assignRole('admin');

        $user1 = new User();
        $user1->name = 'Luis Perez';
        $user1->email = 'luis@email.com';
        $user1->email_verified_at ="2024-10-10";
        $user1->password = bcrypt('password');
        $user1->remember_token = 'nNFLQjr89Qt';
        $user1->save();

        $user1->assignRole('admin');
    }
}