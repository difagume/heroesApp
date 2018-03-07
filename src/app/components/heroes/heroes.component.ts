import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading = true;

  constructor(private _heroesService: HeroesService) {

    // Procedimiento para leer los héroes
    this._heroesService.getHeroes()
      .subscribe(data => {

        // Sin el timeout
        this.heroes = data;
        this.loading = false;

        // Con timeout
        /* setTimeout(() => {
          console.log('getHeroes: ', data);
          this.heroes = data;
          this.loading = false;
        }, 1000); */
      });
  }

  ngOnInit() {
  }

  borraHeroe(key$: string) {
    this._heroesService.borrarHeroe(key$)
      .subscribe(respuesta => {
        console.log('borrado:', respuesta);
        // Cuando elimina correctamente retorna null
        if (respuesta) {
          console.error(respuesta);
        } else {
          /**
           * Todo bien, entonces refresco el lsitado de heroes,
           * se relaciona con el pipe y el parametro pure:false
           * para que no de errores en el log
           */
          delete this.heroes[key$];
        }
      });
  }

}
