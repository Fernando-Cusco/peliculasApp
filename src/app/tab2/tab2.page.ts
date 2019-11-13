import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ideas: string[] = ['SpiderMan', 'Avengers', 'IT 2', 'Joker', 'Jon Wick']
  textoBuscar: string = '';
  constructor() {}


  buscar(event) {
    const texto = event.detail.value;
    console.log(texto);
  }

  enviar(idea) {
    this.textoBuscar = idea;
    console.log(idea);
    
  }
}
