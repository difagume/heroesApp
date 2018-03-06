import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(private _heroesService: HeroesService) {

    // Procedimiento para leer los héroes
    this._heroesService.getHeroes()
      .subscribe(data => {
        console.log('getHeroes: ', data);
        this.heroes = data;
      });
  }

  ngOnInit() {
  }
}
