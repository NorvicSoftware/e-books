<?php

namespace Database\Seeders;

use App\Models\Sale;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SaleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sale1 = new Sale();
        $sale1->customer_id = 1;
        //$sale1->promotion_id = 1;
        $sale1->price = 100.00;
        $sale1->sale_date = "2024-10-10";
        $sale1->save();

        $sale2 = new Sale();
        $sale2->customer_id = 1;
        //$sa2e1->promotion_id = 1;
        $sale2->price = 75.00;
        $sale2->sale_date = "2024-12-10";
        $sale2->save();

        $sale3 = new Sale();
        $sale3->customer_id = 2;
        //$sa3e1->promotion_id = 1;
        $sale3->price = 105.0;
        $sale3->sale_date = "2024-12-11";
        $sale3->save();

        $sale4 = new Sale();
        $sale4->customer_id = 3;
        //$sa4e1->promotion_id = 1;
        $sale4->price = 50.00;
        $sale4->sale_date = "2024-12-15";
        $sale4->save();

        $sale5 = new Sale();
        $sale5->customer_id = 1;
        //$sa5e1->promotion_id = 1;
        $sale5->price = 40.50;
        $sale5->sale_date = "2023-11-01";
        $sale5->save();
    }
}
