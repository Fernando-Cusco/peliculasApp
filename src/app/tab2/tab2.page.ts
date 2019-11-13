import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  buscando: boolean = false;
  ideas: string[] = ['Spider Man', 'Frozen', 'IT', 'Joker', 'Jon Wick']
  textoBuscar: string = '';

  peliculas: Pelicula[] = [];
  constructor(private service: MoviesService, private modal: ModalController) {}

  ngOnInit() {}

  buscar(event) {
    const texto = event.detail.value;
    console.log('TEXTO', texto);
    
    this.buscando = true;
    if( texto.length === 0  || texto === null ) {
      this.buscando = false;
      this.peliculas = [];
      return ;
    }
    
    this.service.getBuscarPelicula(texto).subscribe( response => {
      this.peliculas = response['results'];
      this.buscando = false;
    });
  }

  enviar(idea) {
    this.textoBuscar = idea;
    console.log(idea);
  }

  async verDetalle(id: string) {
    const m = await this.modal.create({
      component: DetalleComponent,
      //parametos que se va a enviar
      componentProps: {
        id: id
      }
    });
    m.present();
  }
}
