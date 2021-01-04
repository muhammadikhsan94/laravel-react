<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $table = "tbl_status";

    public function detaillapor() {
        return $this->belongsTo('App\Models\DetailLapor', 'id_status', 'id');
    }
}
