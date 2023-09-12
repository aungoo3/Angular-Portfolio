import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Aung Oo';
  city : string = "Atlanta, Georgia, USA";
  tagline: string = "It is worth die doing it!";
  aboutMe: string = "My name is Aung, I am from Atlanta, Georgia, USA. I love coding and software enginreering. Becoming a professional software engineer is my long term goal.";
}
