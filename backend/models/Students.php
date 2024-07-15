<?php

namespace Models;

use Illuminate\Database\Eloquent\Model;

class Students extends Model {
    protected $table = 'students';
    protected $fillable = ['first_name', 'last_name'];
    public $timestamps = true;
}
