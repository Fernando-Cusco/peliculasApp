import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  ideas: string[] = ['SpiderMan', 'Avengers', 'IT 2', 'Joker', 'Jon Wick']
  textoBuscar: string = '';
  constructor(private service: MoviesService) {}

  ngOnInit() {}

  buscar(event) {
    const texto = event.detail.value;
    this.service.getBuscarPelicula(texto).subscribe( response => {
      console.log(response);
    });
  }

  enviar(idea) {
    this.textoBuscar = idea;
    console.log(idea);
    
  }
}
