<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();

            $table->string('title', 75)->unique();
            $table->string('subtitle', 250);
            $table->decimal('version', 5, 1)->defaul(1.0);
            $table->date('publish_date');
            $table->decimal('price_sale', 10, 2)->defaul(0.00);
            $table->enum('lenguage', ['Español', 'English', 'Portugues'])->default('Español');
            $table->integer('page_number')->default(0);
            $table->string('ISBN', 15)->unique();

            $table->unsignedBigInteger('author_id');
            $table->unsignedBigInteger('genre_id')->nullable();
            $table->unsignedBigInteger('editorial_id')->nullable();

            $table->foreign('author_id')->references('id')->on('authors')->onDelete('cascade');
            $table->foreign('genre_id')->references('id')->on('genres')->onDelete('set null');
            $table->foreign('editorial_id')->references('id')->on('editorials')->onDelete('set null');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
