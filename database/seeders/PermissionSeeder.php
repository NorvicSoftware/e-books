<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permission1 = Permission::create(['name' => 'genre-read']);
        $permission2 = Permission::create(['name' => 'genre-write']);

        $permission3 = Permission::create(['name' => 'editorial-read']);
        $permission4 = Permission::create(['name' => 'editorial-write']);

        $permission5 = Permission::create(['name' => 'customer-read']);
        $permission6 = Permission::create(['name' => 'customer-write']);

        $permission7 = Permission::create(['name' => 'author-read']);
        $permission8 = Permission::create(['name' => 'author-write']);

        $permission9 = Permission::create(['name' => 'book-read']);
        $permission10 = Permission::create(['name' => 'book-write']);

        $permission11 = Permission::create(['name' => 'user-read']);
        $permission12 =Permission::create(['name' => 'user-write']);


        $role1 = Role::create(['name' => 'admin']);
        $role2 = Role::create(['name' => 'customer']);
        $role3 = Role::create(['name' => 'author']);

        $role1->givePermissionTo([$permission1, $permission2, $permission3, $permission4, $permission5, $permission7, $permission8, $permission9, $permission11, $permission12 ]);
        $role2->givePermissionTo([$permission5, $permission6, $permission7, $permission9]);
        $role3->givePermissionTo([$permission7, $permission8, $permission9, $permission10 ]);

    }
}
