import { Injectable } from '@angular/core';
import { Skill } from '../../../shared/greeting/models/skill';
import { Level } from '../../../shared/greeting/types/level';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
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

  getSkills = (): Observable<Skill[]> => {
    return of(this.skills);
  };
}
