import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component ({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService,
              private router: Router) { }
  heroes = [];
  selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', this.selectedHero.id];
    this.router.navigate(link);
  }
}