import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TodolistComponent } from './components/todolist/todolist.component';

export const routes: Routes = [

    {path:'todolist', component:TodolistComponent},
    {path:'login', component:LoginComponent},
    {path: '', component: TodolistComponent, pathMatch: "full" }
];
