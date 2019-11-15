import { Component, OnInit } from '@angular/core';
import { DetallePelicula, Genre } from '../interfaces/interfaces';
import { DatalocalService } from '../services/datalocal.service';
import { MoviesService } from '../services/movies.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  peliculas: DetallePelicula[] = [];
  generos: Genre[] = [];

  favoritoGenero: any[] = [
  ];

  constructor(private service: DatalocalService,
              private movieService: MoviesService,
              private modalCtrl: ModalController) {}


        //se dispara cada vez que entra a la pestaña
  async ionViewWillEnter() {
    this.peliculas = await this.service.cargarFavoritos();
    this.generos = await this.movieService.cargarGeneros(); 
    this.moviesByGenre(this.generos, this.peliculas);
  }

  //asignar genero a peliculas favoritas
  moviesByGenre(generos: Genre[], peliculas: DetallePelicula[]) {
    this.favoritoGenero = [];
    generos.forEach( genero => {
      this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas.filter( peli => {
          return peli.genres.find( genre => genre.id === genero.id );
        })
      });
    });
    console.log(this.favoritoGenero);
    
  }

}
