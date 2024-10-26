<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Editorial>
 */
class EditorialFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => substr($this->faker->unique()->company(), 0, 35),
            'email' => $this->faker->email(),
            'phone' => substr($this->faker->phoneNumber(), 0, 15),
            'address' => $this->faker->address(),
        ];
    }
}
