import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

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

  constructor() { }

  ngOnInit() {}

}
