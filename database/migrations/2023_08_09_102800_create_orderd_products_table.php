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
        Schema::create('orderd_products', function (Blueprint $table) {
            $table->string('blabla', 255);
            $table->string('labla', 255);
            $table->string('labsfsdf', 255);
            $table->string('labsfsddfsdffdsf', 255);
            $table->string('labsfsddfsdffdsfываыва', 255);
            $table->string('labsfsddfsdffdsfываываваыва', 255);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orderd_products');
    }
};
