import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() peliculasRecientes: Pelicula[] = [];

  slideOpc = {
    slidesPerView: 1.4,
    freeMode: true
  };

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
