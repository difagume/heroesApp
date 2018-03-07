import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  heroesUrl = 'https://heroesapp-3e5f5.firebaseio.com/heroes.json';
  heroeUrl = 'https://heroesapp-3e5f5.firebaseio.com/heroes/';

  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.heroesUrl, body, { headers })
      .map(res => {
        console.log('body del post: ',body);
        console.log('headers del post: ',headers);
        console.log(res.json());
        return res.json();
      });
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.heroeUrl}/${key$}.json`;

    return this.http.put(url, body, { headers })
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }

  getHeroe(key$: string) {
    const url = `${this.heroeUrl}/${key$}.json`;

    return this.http.get(url)
      .map(res => res.json());
  }

  getHeroes() {

    return this.http.get(this.heroesUrl)
      .map(res => res.json());
  }

  borrarHeroe(key$: string) {
    const url = `${this.heroeUrl}/${key$}.json`;
    return this.http.delete(url)
      .map(res => res.json());
  }

}
