<?php

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


Route::group(['middleware' => ['json.response']], function() {

    Route::post('/register', 'App\Http\Controllers\AuthController@registration');
    Route::post('/login', 'App\Http\Controllers\AuthController@login');
    Route::get('/airport', 'App\Http\Controllers\AirportController@search');
    Route::get('/flight', 'App\Http\Controllers\FlightController@search');
    Route::post('/booking', 'App\Http\Controllers\BookingController@booking');
    Route::get('/booking/{booking:code}', 'App\Http\Controllers\BookingController@info');
    Route::get('/booking/{booking:code}/seat', 'App\Http\Controllers\BookingController@flight');
    Route::patch('/booking/{booking:code}/seat', 'App\Http\Controllers\BookingController@seat');
    Route::middleware('auth:api')->get('/user', 'App\Http\Controllers\UserController@info');
    Route::middleware('auth:api')->get('/user/booking', 'App\Http\Controllers\UserController@bookings');
    Route::middleware('auth:api')->delete('/logout', 'App\Http\Controllers\UserController@logout');

});