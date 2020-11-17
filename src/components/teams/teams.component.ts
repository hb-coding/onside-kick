import { Component, OnInit } from '@angular/core';
import Team from '@components/teams/models/Team';

const TEAMS: Team[] = [
  {
    name: 'Broncos',
    logo: 'bronco',
    standing: 4,
    record: '3-5'
  },
  {
    name: 'Chargers',
    logo: 'charger',
    standing: 3,
    record: '3-5'
  },
  {
    name: 'Chiefs',
    logo: 'chiefs',
    standing: 1,
    record: '3-5'
  },
  {
    name: 'Raiders',
    logo: 'raider',
    standing: 2,
    record: '3-5'
  }
];
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.less']
})
export class TeamsComponent implements OnInit {
teams = TEAMS;
  constructor() { }

  ngOnInit(): void {
  }

}
