import { Component, OnInit } from '@angular/core';
import { SportService } from '../sport.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css'],
})
export class SportComponent implements OnInit {
  sports$: Observable<string[]> = this.sportService.sports$;

  selectedSport = this.sportService.selectedSport;

  constructor(private sportService: SportService) {}

  ngOnInit(): void {}

  onSelectSport(sport: string) {
    this.sportService.selectSport(sport);
  }

  onAddSport(sport: string) {
    this.sportService.addSport(sport);
  }
}
