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
        Schema::create('scors', function (Blueprint $table) {
            $table->id();
            $table->string('score', 15);
            $table->date('score_date');
            // $table->unsignedBigInteger('book_id');
            // $table->unsignedBigInteger('author_id');
            $table->morphs('scoreable');
            $table->timestamps();

            // $table->foreign('book_id')->references('id')->on('books')->onDelete('cascade');
            // $table->foreign('score_date')->references('id')->on('authors')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scors');
    }
};
