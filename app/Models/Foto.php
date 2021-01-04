<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Foto extends Model
{
    protected $table="tbl_foto";
    protected $fillable=['id_lapor', 'foto_jalan'];
    public $timestamps = false;

    public function lapor()
    {
        return $this->belongsTo('App\Models\Lapor', 'id_lapor', 'id_lapor');
    }
}
