import {Component, Input} from '@angular/core';

@Component({
  selector: 'hero-detail',
  template: `
    <div class="hero-details" *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div>
        <label>Id: </label> {{selectedHero.id}}
      </div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
  `,

})


export class HeroDetailComponent {
  
}