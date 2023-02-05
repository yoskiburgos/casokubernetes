
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

//const corsOrigin = 'http://localhost:8080/usuarios/obtener';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //url = 'http://localhost:8080/usuarios/obtener';
  url = '/usuarios/obtener';
  constructor(private http: HttpClient) { 
    console.log('Servicio de Personas...')
  }


  consultarPersona() {
    
    return this.http.get<any>(this.url);
  }


}




