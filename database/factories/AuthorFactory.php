<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Author>
 */
class AuthorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nationality' => $this->faker->country(),
            'birth_date' => $this->faker->date(),
            'biography' => $this->faker->paragraphs(3, true),
            'website' => $this->faker->url(),
            'social_network' => $this->faker->url(),
            'user_id' => User::all()->random()->id,

        ];
    }
}
