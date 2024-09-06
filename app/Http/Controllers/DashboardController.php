<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
   public function index(){
       return Inertia::render('dashboard/Dashboard');
   }
}
