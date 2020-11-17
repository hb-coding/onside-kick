import { Component, Input, OnInit } from '@angular/core';
import Team from '@components/teams/models/Team';


@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.less']
})
export class ConferenceComponent implements OnInit {
  @Input() conferenceName: string;
  @Input() teams: Array<Team>;

  constructor() { }

  ngOnInit(): void {
  }

}
