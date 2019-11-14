import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DetallePelicula } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  peliculas: DetallePelicula[] = [];

  constructor(private storage: Storage, private toast: ToastController) {
    this.cargarFavoritos();
   }

  guardarPelicula(pelicula: DetallePelicula) {
    let movieExist = false;
    let mensaje = '';
    for (const peli of this.peliculas) {
      if (peli.id === pelicula.id) {
        movieExist = true;
        break;
      }
    }
    if ( movieExist ) {
      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id );
      mensaje = 'Pelicula removida';
    } else {
      this.peliculas.push(pelicula);
      mensaje = 'Pelicula agregada a favoritos';
    }
    this.presentToast(mensaje);
    this.storage.set('peliculas', this.peliculas);
    return !movieExist;
  }

  async presentToast(msj: string) {
    const toast = await this.toast.create({
      message: msj,
      duration: 1000
    });
    toast.present();
  }

  async cargarFavoritos() {
    const pelis =  await this.storage.get('peliculas');
    this.peliculas = pelis || [];
    return this.peliculas;
  }

  async existePelicula( id ) {
    id = Number(id);
    await this.cargarFavoritos();
    const existe = this.peliculas.find( peli => peli.id === id);
    return (existe) ? true : false;
  }
}
