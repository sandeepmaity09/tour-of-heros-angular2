import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  { 

  title = 'Tour of Heroes';
  // hero = 'Windstorm';

  heroes = HEROES;

  // hero:Hero = {
  //   id:1,
  //   name:'Windstorm'
  // }

  selectedHero:Hero;

  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }

}

const HEROES:Hero[] = [
    {id:11,name:"Mr. Nice"},
    {id:12,name:"Mr. Maity"},
    {id:13,name:"Narco"},
    {id:14,name:"Bombasto"},
    {id:15,name:"Celeritas"},
    {id:16,name:"Superman"},
    {id:17,name:"Batman"},
    {id:18,name:"Dynama"},
    {id:19,name:"Dr IQ"},
    {id:20,name:"This Man"}
  ]
