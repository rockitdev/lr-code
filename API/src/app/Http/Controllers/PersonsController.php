<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PersonsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
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
        try {

            $json = $request->json()->all();

            $request->validate([
                'name' => 'required',
                'email' => 'required|email:rfc,dns',
                'phone_number' => 'required|numeric|min:10',
                'address.house_number' => 'required|numeric',
                'address.street_name' => 'required|string',
                'address.city' => 'required|string',
                'address.state_province' => 'required|string',
                'address.country' => 'required|string'
            ]);

            $response = [
                'success' => true,
            ];

            Storage::append('customers.txt', json_encode($request->json()->all()));

            return response()->json($response, 201);

        } catch (\Illuminate\Validation\ValidationException $e) {

            $response = [
                'success' => false,
                'errors' => $e->validator->errors(),
            ];

            return response()->json($response, $e->status);
        }

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
