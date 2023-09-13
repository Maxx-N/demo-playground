import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.css'],
})
export class SportDetailComponent implements OnInit {
  @Input() selectedSport: string = '';

  constructor() {}

  ngOnInit(): void {}
}
