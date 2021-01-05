
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularyComponent } from './pages/formulary/formulary.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'formulario', component: FormularyComponent },
	{ path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
