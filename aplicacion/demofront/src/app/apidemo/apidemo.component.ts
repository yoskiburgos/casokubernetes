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
   // console.log('Consultando Personas...........');

    this.animesService.consultarPersona().subscribe(response => {
     // console.log("Salida-------------------"+response);
      this.personas = response;
      
   

      });
  }
}