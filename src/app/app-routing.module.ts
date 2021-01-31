import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import{ ContactComponent } from './contact/contact.component';
import{ FeaturesComponent } from './features/features.component';
import{ LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
 },
 {
    path:'contact',
    component:ContactComponent,
 },
 {
  path:'features',
  component:FeaturesComponent,
},
{
  path:'login',
  component:LoginComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
