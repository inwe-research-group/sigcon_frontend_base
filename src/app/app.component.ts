import { Component } from '@angular/core';
import { Persona } from './model/persona';
import { PersonaService } from './services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sigcon_frontend';
  personaArray: Persona[] = [];
  constructor(private personaService: PersonaService) {}
  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(): void {
    this.personaService.getPersonas().subscribe(
      (result: any) => {
        console.log('Result', result);
        this.personaArray = result;
        console.log(this.personaArray);
      },
      (err: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Advertencia....',
          text: '!Ah ocurrido un error!',
        });
      }
    );
  }
}
