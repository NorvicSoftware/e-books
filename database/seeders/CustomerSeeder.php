<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
        $customer1->user_id = 1;
        $customer1->save();

        $customer1 = new Customer();
        $customer1->nit = "10000011";
        $customer1->code = "100001";
        $customer1->user_id = 1;
        $customer1->save();

        $customer1 = new Customer();
        $customer1->nit = "100000112";
        $customer1->code = "100002";
        $customer1->user_id = 2;
        $customer1->save();

        $customer1 = new Customer();
        $customer1->nit = "100000113";
        $customer1->code = "100003";
        $customer1->user_id = 2;
        $customer1->save();

        $customer1 = new Customer();
        $customer1->nit = "100000114";
        $customer1->code = "100004";
        $customer1->user_id = 3;
        $customer1->save();
    }
}
