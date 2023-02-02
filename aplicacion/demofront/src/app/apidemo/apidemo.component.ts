/*
import { Component } from '@angular/core';
import { PersonaService } from './services/persona.service';
@Component({
  selector: 'app-apidemo',
  templateUrl: './apidemo.component.html',
  styleUrls: ['./apidemo.component.css']
})
export class ApidemoComponent {
  title = 'client';
  public personas : Array<any> = []

  constructor(private personaService: PersonaService){
    this.personaService.getPersonas().subscribe((resp:any) => {
      console.log('----------------------------------->'+resp)
      this.personas = resp
    })
  }
}
*/


import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/apidemo/model/Persona';
import { PersonaService } from 'src/app/apidemo/services/persona.service';

@Component({
  selector: 'app-apidemo',
  templateUrl: './apidemo.component.html',
  styleUrls: ['./apidemo.component.css']
})
export class ApidemoComponent implements OnInit {
  
  public personas: Persona[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  
  constructor(private animesService: PersonaService) { }
  ngOnInit(): void {
    this.consultarAnimes();
  }

  consultarAnimes() {
    console.log('Consultando Personas...........');

    this.animesService.consultarPersona().subscribe((response:any) => {
      console.log("Salida-------------------"+response);
      this.personas = response;
      
      /*this.collectionSize = this.personas.length;

      this.personas = this.personas
            .map((persona, i) => ({counter: i + 1, ...persona}))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      */

      });
  }
}