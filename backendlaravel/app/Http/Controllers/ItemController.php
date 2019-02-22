<?php

// ItemController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\item;

class ItemController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $item = new Item([
            'nom' => $request->get('nom'),
            'prenom' => $request->get('prenom')
        ]);
        $item->save();
        return response()->json('Successfully added');
    }
}