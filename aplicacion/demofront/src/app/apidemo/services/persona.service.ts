import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:8080/usuarios/obtener'
  //url = 'usuarios/obtener'

  constructor(private http: HttpClient) { 
    console.log('Servicio de Personas...')
  }

  //:Observable<any>
  getPersonas() {
    let header = new HttpHeaders()
    .set('Type-content', 'application/json')

    return this.http.get(this.url, {headers: header });

    //return this.http.get<any>(this.url);

  }

}
