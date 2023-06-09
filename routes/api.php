<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\ResponseController;

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

Route::middleware('auth:api')->group(function(){

});
Route::post('/register', [PassportAuthController::class, '/register']);
Route::post('/login', [PassportAuthController::class, '/login']);
//Route::get('/token',[])


Route::post('/usuarios_email', [PassportAuthController::class, 'index']);
Route::post('/user_update', [PassportAuthController::class, 'update']);
Route::post('/user_delete', [PassportAuthController::class, 'destroy']);
