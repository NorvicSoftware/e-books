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
        $customer1 = new Customer();
        $customer1->nit = "100000111";
        $customer1->code = "100000";
        $customer1->user_id = 8;//User::all()->random()->id;
        $customer1->save();

        $customer2 = new Customer();
        $customer2->nit = "10000011";
        $customer2->code = "100001";
        $customer2->user_id = 9;//User::all()->random()->id;
        $customer2->save();

        $customer3 = new Customer();
        $customer3->nit = "100000112";
        $customer3->code = "100002";
        $customer3->user_id = 10;//User::all()->random()->id;
        $customer3->save();

        $customer4 = new Customer();
        $customer4->nit = "100000113";
        $customer4->code = "100003";
        $customer4->user_id = 11;//User::all()->random()->id;
        $customer4->save();

        $customer5 = new Customer();
        $customer5->nit = "100000114";
        $customer5->code = "100004";
        $customer5->user_id = 12;//User::all()->random()->id;
        $customer5->save();
    }
}
