<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaxeController extends Controller
{
    public function calculator(Request $request)
    {
        // Obtiene los valores de la petición GET
        $amount = $request->query('cantidad');
        $taxe = $request->query('impuesto');
        
        // Realiza el cálculo del IVA
        $iva = $amount * (.16/ 100);
        // Realiza el calculo del IEPS
        $ieps = $amount * (.5 / 100);

        // Retorna la vista con los resultados
        return view('calcular-iva', ['cantidad' => $amount, 'impuesto' => $taxe, 'iva' => $iva]);
    }
}
