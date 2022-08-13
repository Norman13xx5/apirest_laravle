<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });



Route::GET('/registroo', 'App\Http\Controllers\RistroController@index');
Route::POST('/registro', 'App\Http\Controllers\RistroController@store');
Route::PUT('/registro', 'App\Http\Controllers\RistroController@update');
