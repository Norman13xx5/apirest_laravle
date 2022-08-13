<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Registro;

class RistroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $registros = Registro::all();
        return $registros;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $logFile = fopen("log2.txt", 'a') or die("Error creando archivo");
        fwrite($logFile, "\n" . date("d/m/Y H:i:s") . $request) or die("Error escribiendo en el archivo");
        fclose($logFile);
        $registro  = new Registro();
        $registro->name = $request->name;
        $registro->username = $request->username;
        $registro->email = $request->email;
        $registro->city = $request->addresscity;
        $registro->phone = $request->phone;
        $registro->name_company = $request->companyname;
        $registro->birth_date = $request->birth_date;
        $registro->photo = $request->photo;
        $logFile = fopen("log.txt", 'a') or die("Error creando archivo");
        fwrite($logFile, "\n" . date("d/m/Y H:i:s") . $registro) or die("Error escribiendo en el archivo");
        fclose($logFile);
        $registro->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function update(Request $request)
    {
        $micarpeta = '../../../../public/imagenes';
        if (!file_exists($micarpeta)) {
            mkdir($micarpeta, 0777, true);
        }

        $imagen = $_FILES[$request->photo]['name'];
        $temp = $_FILES['archivo']['tmp_name'];
        $ruta = $micarpeta . $imagen;
        if (move_uploaded_file($temp, $ruta)) {
        }

        $registro = Registro::findOrFail($request->id);
        $registro->birth_date = $request->birth_date;
        $registro->photo = $ruta;

        $registro->save();
        return $registro;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($request)
    {
        $registro = Registro::destroy($request->id);
        return $registro;
    }
}
