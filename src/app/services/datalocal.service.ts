import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DetallePelicula } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  peliculas: DetallePelicula[] = [];

  constructor(private storage: Storage) { }

  guardarPelicula(pelicula: DetallePelicula) {
    this.peliculas.push(pelicula);
    this.storage.set('peliculas', this.peliculas);
  }
}
