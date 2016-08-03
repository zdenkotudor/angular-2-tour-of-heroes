import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit, OnDestroy{
  constructor(private activatedRoute: ActivatedRoute,
              private heroService: HeroService) {};
  hero: Hero;
  sub: any;
  
  ngOnInit () {
    this.sub = this.activatedRoute.params.subscribe(
      params => {
        let id = +params['id'];
        this.heroService.getHero(id).then(hero => this.hero = hero);
      }
    );
  }

  ngOnDestroy () {
    this.sub.unsubscribe();
  }

  goBack () {
    window.history.back();
  }

}