<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Sequence extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sequences', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('elevator_id')->unsigned();
            $table->integer('floor_id')->unsigned();
            $table->string('origin');
            $table->string('destiny');
            $table->string('times_call');
            $table->timestamps();
            
            $table->foreign('elevator_id')->references('id')->on('elevators');
            $table->foreign('floor_id')->references('id')->on('floors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sequences');
    }
}
