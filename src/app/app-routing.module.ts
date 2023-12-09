import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PrincipalComponent } from './pages/principal/principal.component';


const routes: Routes = [

  { path:'', component: LandingPageComponent},
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component:LoginPageComponent},
  { path: 'principal', component:PrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
