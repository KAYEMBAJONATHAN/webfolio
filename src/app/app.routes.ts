import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { Component, NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'footer', component: FooterComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}, 
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
