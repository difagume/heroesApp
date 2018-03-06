import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  firebaseUrl = 'https://heroesapp-3e5f5.firebaseio.com/heroes.json';

  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.firebaseUrl, body, { headers })
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }

}
