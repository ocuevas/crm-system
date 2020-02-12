import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/dashboard/pages/clients/clients.component';
import {ProductsComponent} from './components/dashboard/pages/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'  },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'clients', component: ClientsComponent },
    { path: 'products', component: ProductsComponent }
  ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }


