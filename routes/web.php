<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\UserController;

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

    Route::controller(UserController::class)->group(function () {
        Route::get('/users', 'index')->name('users.index');
        Route::post('/users', 'store')->name('users.store');
        Route::put('/users/{id}', 'update')->name('users.update');
        Route::delete('/users/{id}', 'destroy')->name('users.delete');
    });

    Route::controller(AuthorController::class)->group(function () {
        Route::get('/authors', 'index')->name('authors.index');
        Route::post('/authors', 'store')->name('authors.store');
        Route::put('/authors/{id}', 'update')->name('authors.update');
        Route::delete('/authors/{id}', 'destroy')->name('authors.delete');
    });
});

require __DIR__ . '/auth.php';
