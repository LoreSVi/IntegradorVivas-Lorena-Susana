import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
 {path: '',component: IndexComponent},
 {path:'login', component: LoginComponent},
 {path: '**', component: Error404Component},
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
