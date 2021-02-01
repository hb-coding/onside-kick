import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import Team from '@common/models/Team';

const AFC_WEST: Team[] = [
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

const AFC_EAST: Team[] = [
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
const AFC_NORTH: Team[] = [
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
const AFC_SOUTH: Team[] = [
=======
import Team from '@components/teams/models/Team';

const TEAMS: Team[] = [
>>>>>>> 3c8aeab02841fcad5f1e8549e6308901ba954789
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
<<<<<<< HEAD
afcWest = AFC_WEST;
afcNorth = AFC_NORTH;
afcSouth = AFC_SOUTH;
afcEast = AFC_EAST;

=======
teams = TEAMS;
>>>>>>> 3c8aeab02841fcad5f1e8549e6308901ba954789
  constructor() { }

  ngOnInit(): void {
  }

}
