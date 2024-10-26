<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

use App\Models\Comment;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 5; $i++) {
            Comment::create([
                'comment' => 'Text for comment #' . $i,
                'user_id' => 1,
                'commentable_type' => Arr::random(['App\Models\Book', 'App\Models\Author']),
                'commentable_id' => arr::random([1, 2, 3, 4, 5]),
            ]);
        }
    }
}
