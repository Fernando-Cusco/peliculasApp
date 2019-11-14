import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { DetallePelicula, ActoresPelicula, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DatalocalService } from '../../services/datalocal.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  //recibimos un parametro desde el padre
  @Input() id;

  pelicula: DetallePelicula = {};
  actores: Cast[] = [];
  
  star: string = 'star-outline';

  slideposter = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };


  //ocultar o mostrar el texto
  oculto = 100;
  constructor(private service: MoviesService,
              private modalCtrl: ModalController,
              private serviceStorage: DatalocalService) { }

  ngOnInit() {
    const existe = this.serviceStorage.existePelicula(this.id).then(existe => {
      this.star = (existe) ? 'star' : 'star-outline';
    });
    
    
    this.service.getPeliculaDetalle(this.id).subscribe( response => {
      this.pelicula = response;
      console.log(response);
    });

    this.service.getActoresPelicula(this.id).subscribe( response => {
      this.actores = response.cast;
      console.log(response);
      
    });
  }

  regresar() {
    //regresamos a la pagina anterior
    this.modalCtrl.dismiss();
    
  }

  favorito() {
    const exi = this.serviceStorage.guardarPelicula(this.pelicula);
    this.star = (exi) ? 'star' : 'star-outline';

  }

}
