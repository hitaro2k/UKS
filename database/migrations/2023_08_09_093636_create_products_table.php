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
        Schema::create('products', function (Blueprint $table) {

            $table->string('maker', 255);
            $table->string('code', 255);
            $table->string('name', 2555);
            $table->decimal('price', 5, 2);
            $table->integer('count');
            $table->string('analog',255)->nullable();
            $table->decimal('exchange', 5, 2)->nullable();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
