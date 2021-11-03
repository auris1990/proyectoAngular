
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}

