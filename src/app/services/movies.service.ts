import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeature() {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-11-03&api_key=2d5ed9d0742928ec0f23a38aa11a7696&language=es&include_image_language=es`);

  }
}
