import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = "Giulia Rafaela Potenza Dias";
  text = '';
  pessoas = [
    {
      firstName: "",
      lastName: "",
      age: 0
    }
  ];

  constructor(private peopleService: PeopleService) {

  }

  // método de ciclo de vida do angular
  ngOnInit(): void {
    this.getPeople();
    // setInterval é uma função de intervalos especificados (em milissegundos).
    let interval = setInterval(() => {
      this.count++;
      // se meu count for maior de 10
      if (this.count === 10) {
        // clearInterval é uma função que para os intervalos
        clearInterval(interval)
      }
      // 1 segundo = 1000 milissegundos.
    }, 1000)
  }

  public clicou(nome: string): void {
    console.log("Clicou em mim", nome)
  };

  getPeople() { // Não tem nada a ver com o getPessoa do meu serviço
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }
}
