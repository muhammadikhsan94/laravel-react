<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailLapor extends Model
{
    protected $table="tbl_detaillapor";
    protected $fillable=['id_lapor', 'disposisi', 'id_status', 'proses_perbaikan'];
    public $timestamps = false;

    public function lapor()
    {
        return $this->belongsTo('App\Models\Lapor', 'id_lapor', 'id_lapor');
    }

    public function admin()
    {
        return $this->hasOne('App\Models\Admin', 'id', 'disposisi');
    }

    public function status()
    {
        return $this->hasOne('App\Models\Status', 'id', 'id_status');
    }
}
