import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];

  slideOpc = {
    slidesPerView: 1.4,
    freeMode: true
  };

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService.getFeature()
        .subscribe( response => {
          console.log(response);
          this.peliculasRecientes = response.results;
    });
  }
}
