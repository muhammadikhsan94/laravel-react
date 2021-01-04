<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lapor;
use App\Models\DetailLapor;
use App\Models\Foto;
use App\Models\Kategori;
use App\Models\Admin;
use App\Models\Status;

class LaporController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lapor = Lapor::with(
            ['Kategori', 'Foto']
        )->orderBy('id_lapor', 'desc')->get();

        return $lapor->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nama_pelapor' => 'required',
            'nik' => 'required',
            'alamat' => 'required',
            'no_hp' => 'required',
            'nama_jalan' => 'required',
            'id_kategori' => 'required',
            'lat' => 'required',
            'lng' => 'required'
        ]);

        $data = \App\Models\Lapor::create([
            'nama_pelapor' => $validatedData['nama_pelapor'],
            'nik' => $validatedData['nik'],
            'alamat' => $validatedData['alamat'],
            'no_hp' => $validatedData['no_hp'],
            'nama_jalan' => $validatedData['nama_jalan'],
            'id_kategori' => $validatedData['id_kategori'],
            'lat' => $validatedData['lat'],
            'lng' => $validatedData['lng'],
        ]);

        $msg = [
            'success' => true,
            'message' => 'Complaint created successfully!'
        ];

        return response()->json($msg);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getDetail($id_lapor)
    {
        $detaillapor = Lapor::with(['Kategori', 'Foto', 'DetailLapor.Status', 'DetailLapor.Admin'])->get();
        $detaillapor = $detaillapor->find($id_lapor);

		return $detaillapor->toJson();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
