<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function index()
    {
        $ivaP = DB::select('SELECT * FROM _federal_taxes WHERE id = 1');

        return Inertia::render('Home', [
            'ivaP' => $ivaP,
        ]);
    }
}
