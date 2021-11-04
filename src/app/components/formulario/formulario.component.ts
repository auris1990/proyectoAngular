import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Formulario } from 'src/app/models/formulario';
import { FormularioService } from 'src/app/services/formulario.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioForm: FormGroup;
  titulo_formulario = "Crear formulario";
	id: String | null;


  constructor(private fb: FormBuilder,private router:Router, private _formularioService: FormularioService, private idRoute: ActivatedRoute) {
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
    this.id = this.idRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.accionSolicitadaform();
  }

  manipulacion_data_formulario() {
    console.log(this.formularioForm);
  

	const FORMULARIO: Formulario = { 
    
    tipoidentificacion: this.formularioForm.get('tipoIdentificacion')?.value, 
    numeroidentificacion: this.formularioForm.get('numeroIdentificacion')?.value, 
    nombre: this.formularioForm.get('nombre')?.value, 
    apellido: this.formularioForm.get('apellido')?.value,
    telefono: this.formularioForm.get('telefono')?.value,
    direccion: this.formularioForm.get('direccion')?.value,
    email: this.formularioForm.get('email')?.value,
    genero: this.formularioForm.get('genero')?.value

  }

  console.log(FORMULARIO)

  if(this.id !== null){
    //editamos formulario
    this._formularioService.putFormulario(this.id, FORMULARIO).subscribe(data => {
      this.router.navigate(['/']);
      Swal.fire({
        icon: 'success',
        title: ' Formulario ha si actualizado!'
      })
    }, error => {
      console.log(error)
    })
  }else{
    //creamos formulario
    this._formularioService.postFormularios(FORMULARIO).subscribe(data => {
      this.router.navigate(['/']);
      Swal.fire({
        icon: 'success',
        title: 'Formulario registrado!'
      })
    }, error => {
      console.log(error)
    })
  }

}


accionSolicitadaform() {
  if (this.id !== null) {
    //editamos producto
    this.titulo_formulario = "Editar formulario";
    this._formularioService.getFormulario(this.id).subscribe(data => {
      this.formularioForm.setValue({
        tipoidentificacion: data. tipoidentificacion, //, Validators.email, Validators.minLength(5)
        numeroidentificacion: data.numeroidentificacion,
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        direccion: data.direccion,
        email: data.email,
        genero: data.genero,

      })
    })
  } 
}

}