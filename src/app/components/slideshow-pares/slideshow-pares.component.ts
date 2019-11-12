import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

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

  constructor() { }

  ngOnInit() { }

  cargarMas() {
    this.cargar.emit();
  }

}
