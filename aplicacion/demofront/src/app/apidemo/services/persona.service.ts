/*
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
const corsOrigin = 'http://localhost:8080/usuarios/obtener';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:8080/usuarios/obtener';
  constructor(private http: HttpClient) { 
    console.log('Servicio de Personas...')
  }
  //:Observable<any>
  getPersonas() {
    let header = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, x-client-key, x-client-token, x-client-secret, Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
    })
    .set('Type-content', 'application/json')
    return this.http.get(this.url, {headers: header, withCredentials: true });
  }
  getData() {
    return this.http.get('http://localhost:8080/usuarios/obtener');
  }
}
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';
//import { Persona } from '../model/Persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  /**
   * URL base del microservicio de animes de springboot.
   */

  //private baseUrl = '/api/usuarios';

  private baseUrl = 'https://localhost/usuarios';
 // private baseUrl = 'url:8080/usuarios';
  /**
   * Constructor que inicializa el servicio.
   */
  constructor(private httpClient: HttpClient) { 

  }

  /**
   * Funcion que permite consumir el servicio para consultar animes.
   * Access-Control-Allow-Origin: http://localhost:9999
   */
  consultarPersona() : Observable<any> {
    let header = new HttpHeaders({
      'Access-Control-Allow-Origin': 'https://localhost:443',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, x-client-key, x-client-token, x-client-secret, Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
    })
    .set('Type-content', 'application/json')
    //return this.http.get(this.url, {headers: header, withCredentials: true });



    return this.httpClient.get<any>(`${this.baseUrl}/obtener`, {headers: header, withCredentials: true });
  }
}


