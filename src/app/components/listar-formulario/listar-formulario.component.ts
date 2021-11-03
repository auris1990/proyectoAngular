import { Component, OnInit } from '@angular/core';
import { Formulario } from 'src/app/models/formulario';
import { FormularioService } from 'src/app/services/formulario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-formulario',
  templateUrl: './listar-formulario.component.html',
  styleUrls: ['./listar-formulario.component.css']
})
export class ListarFormularioComponent implements OnInit {

  listadoFormulario: Formulario[] = []
  
  constructor(private _formularioService: FormularioService) { }

  ngOnInit(): void {
    this.obtenerFormularios();
	}

	obtenerFormularios() {
		this._formularioService.getFormularios().subscribe(data => {
			// console.log(data)
			this.listadoFormulario = data;
		}, error => {
			console.log(error)
		})
	}

	eliminarFormulario(id: any) {
		Swal.fire({
			title: 'ADVERTENCIA! Esta seguro de eliminar el formulario?',
			text: "Esta acción no sera reversible",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3d66eb',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, eliminar'
		}).then((result) => {
			if (result.isConfirmed) {
				this._formularioService.deleteFormulario(id).subscribe(data => {
					Swal.fire({
						icon: 'success',
						title: ' Formulario Eliminado!'
					  })
					this.obtenerFormularios();
				}, error => {
					console.log(error)
				})
			}
		})
	}

}


