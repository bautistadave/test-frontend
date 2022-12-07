import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatitoService } from 'src/app/services/patito.service';
import {FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  patitoForm!: FormGroup ;
  colors: String[] = ["Rojo", "Verde", "Amarillo", "Negro"];
  tamanio: String[] = ["XLarge", "Large", "Medium", "Small", "XSmall"];
  
  constructor(private fb: FormBuilder,
    private router: Router,
    private patitoService: PatitoService) { }

  ngOnInit(): void {
    this.patitoForm = this.fb.group({
        color: [''],
        tamanio: [''],
        precio: [''],
        cantidad: [''],
    })

  }

  submitForm(){
    this.patitoService.create(this.patitoForm.value)
    .subscribe( res => {
      console.log('patito created');
      this.router.navigate(['/home']);
    })
  }


}
