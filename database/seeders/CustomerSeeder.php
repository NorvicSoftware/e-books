<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::find(8);
        $customer1 = new Customer();
        $customer1->nit = "100000111";
        $customer1->code = "100000";
        $customer1->user_id = $user->id;//User::all()->random()->id;
        $customer1->save();
        $user->assignRole('customer');

        $user1 = User::find(9);
        $customer2 = new Customer();
        $customer2->nit = "10000011";
        $customer2->code = "100001";
        $customer2->user_id = $user1->id;//User::all()->random()->id;
        $customer2->save();
        $user1->assignRole('customer');

        $user2 = User::find(10);
        $customer3 = new Customer();
        $customer3->nit = "100000112";
        $customer3->code = "100002";
        $customer3->user_id = $user2->id;//User::all()->random()->id;
        $customer3->save();
        $user2->assignRole('customer');

        $user3 = User::find(11);
        $customer4 = new Customer();
        $customer4->nit = "100000113";
        $customer4->code = "100003";
        $customer4->user_id = $user3->id;//User::all()->random()->id;
        $customer4->save();
        $user3->assignRole('customer');

        $user4 = User::find(12);
        $customer5 = new Customer();
        $customer5->nit = "100000114";
        $customer5->code = "100004";
        $customer5->user_id = $user4->id;//User::all()->random()->id;
        $customer5->save();
        $user4->assignRole('customer');
    }
}
