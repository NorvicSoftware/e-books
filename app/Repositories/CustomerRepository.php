<?php

namespace App\Repositories;

use App\Models\Customer;

class CustomerRepository {
    public function getAllCustomer(){
        return Customer::with('user:id,name,email')->get();
    }
}