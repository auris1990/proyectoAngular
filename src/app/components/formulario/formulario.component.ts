import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Formulario } from 'src/app/models/formulario';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioForm = this.fb.group({

      tipoIdentificacion: ['', [Validators.required]],
      numeroIdentificacion: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      email: ['', [Validators.required]],
      genero: ['', [Validators.required]],


    })

  }

  ngOnInit(): void {
  }

  agregarFormulario() {
    console.log(this.formularioForm);
  }

	const FORMULARIO: Formulario = { 
    
    tipoidentificacion: this.formularioForm.get('tipoidentificacion')?.value, 
    numeroidentificacion: this.formularioForm.get('numeroidentificacion')?.value, 
    nombre: this.formularioForm.get('nombre')?.value, 
    apellido: this.formularioForm.get('apellido')?.value,
    telefono: this.formularioForm.get('telefono')?.value,
    direccion: this.formularioForm.get('direccion')?.value,
    email: this.formularioForm.get('email')?.value,
    genero: this.formularioForm.get('genero')?.value

  }

  console.log(FORMULARIO)

  this.router.navigate(['/']);
  Swal.fire({
    icon: 'success',
    title: 'formulario registrado!'
  })
}

}
