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
            $table->string('id_product', 255);
            $table->string('price', 255)->nullable();
            $table->string('count', 255);
            $table->string('something', 255);
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
