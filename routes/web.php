<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Views/Dashboard');
});

Route::get('/attendance', function () {
    return Inertia::render('Views/Attendance');
});



