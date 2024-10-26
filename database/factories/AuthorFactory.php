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
            'nationality' => substr($this->faker->country(), 0, 35),
            'birth_date' => $this->faker->date(),
            'biography' => $this->faker->paragraphs(3, true),
            'website' => substr($this->faker->url(), 0, 75),
            'social_network' => substr($this->faker->url(), 0, 75),
            'user_id' => User::all()->random()->id,

        ];
    }
}
