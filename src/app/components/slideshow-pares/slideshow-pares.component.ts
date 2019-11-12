import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  
  @Output() cargar = new EventEmitter();

  slideOpc = {
    slidesPerView: 2.1,
    freeMode: true,
    spaceBetween: -10
  };

  constructor(private modal: ModalController) { }

  ngOnInit() { }

  cargarMas() {
    this.cargar.emit();
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
