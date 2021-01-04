<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $table = "users";
    protected $primaryKey = "id";
    protected $fillable = ['name', 'email', 'password'];
    protected $hidden = [
        'password',
        'remember_token',
    ];
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public $timestamps = false;

    public function detaillapor()
    {
        return $this->belongsTo('App\Models\DetailLapor', 'disposisi', 'id');
    }
}
