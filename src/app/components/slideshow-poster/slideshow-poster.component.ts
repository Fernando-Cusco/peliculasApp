import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  slideOpc = {
    slidesPerView: 3.3,
    freeMode: true
  };

  @Input() peliculasRecientes: Pelicula[] = [];
  constructor(private modal: ModalController) { }

  ngOnInit() {}

  async verDetalle(id: string) {
    const m = await this.modal.create({
      component: DetalleComponent,
      componentProps: {
        id: id
      }
    });
    m.present();
  }

}
