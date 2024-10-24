<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\EditorialController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::controller(GenreController::class)->group(function () {
        Route::get('/genres', 'index')->name('genres.index');
        Route::post('/genres', 'store')->name('genres.store');
        Route::put('/genres/{id}', 'update')->name('genres.update');
        Route::delete('/genres/{id}', 'destroy')->name('genres.delete');
    });


    Route::controller(CustomerController::class)->group(function () {
        Route::get('/customers', 'index')->name('customers.index');
        Route::post('/customers', 'store')->name('customers.store');
        Route::put('/customers/{id}', 'update')->name('customers.update');
        Route::delete('/customers/{id}', 'destroy')->name('customers.delete');
    });

    Route::controller(EditorialController::class)->group(function () {
        Route::get('/editorials', 'index')->name('editorials.index');
        Route::post('/editorials', 'store')->name('editorials.store');
        Route::put('/editorials/{id}', 'update')->name('editorials.update');
        Route::delete('/editorials/{id}', 'destroy')->name('editorials.delete');
    });
});

require __DIR__ . '/auth.php';
