import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-regis-form',
  templateUrl: './regis-form.component.html',
  styleUrls: ['./regis-form.component.scss']
})
export class RegisFormComponent implements OnInit {

  constructor() { }
  
  regisForm:any;


  ngOnInit(): void {
    this.regisForm= new FormGroup({
      "Nombre":new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "Apellido":new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "fechaNacim":new FormControl(null, [Validators.required , Validators.pattern('[0-9,/]*')]),
    });
  }

    submitData(){
      console.log(this.regisForm.value);

      if(this.regisForm.valid){
        alert('Validacion exitosa');
        this.regisForm.reset();
      }
    }

    get nombre(){
      return this.regisForm.get('Nombre');
    }

    get apellido(){
      return this.regisForm.get('Apellido');
    }

    get fecha(){
      return this.regisForm.get('fechaNacim');
    }
}


