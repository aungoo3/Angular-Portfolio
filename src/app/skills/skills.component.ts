import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skills: Skill[] = [
    {
      id: 0,
      name: 'Java',
      level: Level.Intermediate
    },
    {
      id: 1,
      name: 'JavaScript',
      level: Level.Advanced
    },
    {
      id: 2,
      name: 'HTML5',
      level: Level.Advanced
    },
    {
      id: 3,
      name: 'CSS3',
      level: Level.Beginner
    },
    {
      id: 4,
      name: 'SQL',
      level: Level.Intermediate
    },
    {
      id: 5,
      name: 'Angular',
      level: Level.Beginner
    },
    {
      id: 6,
      name: 'Bootstrap',
      level: Level.Beginner
    },
    {
      id: 7,
      name: 'Git & GitHub',
      level: Level.Advanced
    },
  ];

  constructor(){}

  ngOnInit( ) {

  }

}
