import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ // diz para registrar um serviço people no nivel raiz do aplicativo
  providedIn: 'root' // quero que esse serviço ser disponível em qualquer lugar da aplicação 
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: "Giulia",
        lastName: "Rafaela",
        age: 24
      },
      {
        firstName: "Andrey",
        lastName: "Felipe",
        age: 30
      },
      {
        firstName: "Agnaldo",
        lastName: "Dias",
        age: 58
      },
      {
        firstName: "Suely",
        lastName: "Potenza",
        age: 63
      }
    ]
    return of(peopleArray);
  }
}
