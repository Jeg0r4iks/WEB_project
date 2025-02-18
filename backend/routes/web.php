<?php

use App\Http\Controllers\FormController;

Route::get('/form', [FormController::class, 'showForm']);
Route::post('/form-submit', [FormController::class, 'handleForm'])->name('form.submit');

