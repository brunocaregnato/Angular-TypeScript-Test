import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HoteisComponent } from './hoteis/hoteis.component';
import { QuartosComponent } from './quartos/quartos.component';

export const ROUTES : Routes = [
    { path: '', component: HomeComponent },
    { path: 'hoteis', component: HoteisComponent},
    { path: 'quartos/:id', component: QuartosComponent}
]