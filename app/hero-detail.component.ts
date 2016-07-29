import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div class="hero-details" *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>Id: </label> {{hero.id}}
      </div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `,

})

export class HeroDetailComponent {
  @Input()
  hero: Hero;
}