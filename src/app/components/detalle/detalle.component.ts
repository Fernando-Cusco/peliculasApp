import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { DetallePelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  //recibimos un parametro desde el padre
  @Input() id;

  pelicula: DetallePelicula = {};
  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.service.getPeliculaDetalle(this.id).subscribe( response => {
      this.pelicula = response;
      console.log(response);
    });

    this.service.getActoresPelicula(this.id).subscribe( response => {
      console.log(response);
      
    });


  }

}
