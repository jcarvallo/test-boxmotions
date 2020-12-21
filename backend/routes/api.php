<?php

use App\Http\Controllers\API\ElevatorController;
use App\Http\Controllers\API\FloorController;
use App\Http\Controllers\API\SequenceController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('elevators',ElevatorController::class);
Route::apiResource('floors', FloorController::class);
Route::apiResource('sequences', SequenceController::class);

