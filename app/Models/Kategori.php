<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{
    protected $table="tbl_kategori";
    protected $primaryKey="id_kategori";
    protected $fillable=['nama_kategori', 'icon'];

    public function lapor()
    {
        return $this->belongsTo('App\Models\Lapor', 'id_kategori', 'id_kategori');
    }
}
