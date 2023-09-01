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
            $table->string('code', 255);
            $table->string('price', 255)->nullable();
            $table->string('count', 25);
            $table->string('email', 40);
            $table->string('user-id', 10);
            $table->string('status', 25)->nullable();
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
