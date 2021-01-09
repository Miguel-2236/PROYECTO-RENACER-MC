
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { FormularyComponent } from './formulary/formulary.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomePageComponent,
    FormularyComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    CommonModule, 
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
