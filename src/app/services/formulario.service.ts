
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formulario } from '../models/formulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  url = 'http://localhost:4000/api/formulario/';

  constructor(private http: HttpClient) { }

  getFormularios(): Observable<any>{
		return this.http.get(this.url);
	}

	deleteFormulario(id: String): Observable<any>{
		return this.http.delete(this.url + id);
	}
	postFormularios( formulario: Formulario):Observable<any>{
		return this.http.post(this.url, formulario)
	}

	getFormulario(id:String): Observable<any>{
			return this.http.get(this.url + id);
	}

	putFormulario(id: String, formulario: Formulario): Observable<any>{
		return this.http.put(this.url + id, formulario);
	}
}






