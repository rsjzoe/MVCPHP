<?php

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Schema\Blueprint;

require  __DIR__ . '/../../config/database.php';

Capsule::schema()->create('students', function (Blueprint $table) {
    $table->increments('id');
    $table->string('first_name');
    $table->text('last_name');
    $table->text('created_at');
    $table->text('updated_at');
});
