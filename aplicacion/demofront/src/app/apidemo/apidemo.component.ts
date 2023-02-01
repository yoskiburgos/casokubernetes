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
      console.log(resp)
      this.personas = resp
    })
  }

}
