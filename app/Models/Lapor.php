<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lapor extends Model
{
    protected $table="tbl_lapor";
    protected $primaryKey="id_lapor"; 
    protected $fillable=['nama_pelapor', 'nik', 'alamat', 'no_hp', 'nama_jalan', 'id_kategori', 'lat', 'lng'];
    public $timestamps = false;

    public function foto()
    {
        return $this->hasMany('App\Models\Foto', 'id_lapor', 'id_lapor');
    }

    public function kategori()
    {
        return $this->hasOne('App\Models\Kategori', 'id_kategori', 'id_kategori');
    }

    public function detaillapor()
    {
        return $this->hasOne('App\Models\DetailLapor', 'id_lapor');
    }
}