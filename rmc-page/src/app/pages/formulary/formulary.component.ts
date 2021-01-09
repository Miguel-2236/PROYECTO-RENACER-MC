import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.scss']
})
export class FormularyComponent implements OnInit {
  
  disabledSubmitButton:boolean = false;
  contactForm : FormGroup = new FormGroup({
		apellido        : new FormControl(),
		nombre	: new FormControl(),
		identificacion		: new FormControl(),
		email		: new FormControl(),
		telefono	: new FormControl(),
		servicio	: new FormControl(),
		cantAsientos		: new FormControl()
	});

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {}

}
