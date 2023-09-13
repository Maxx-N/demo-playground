import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  private readonly _sports$ = new BehaviorSubject<string[]>([
    'foot',
    'rugby',
    'tennis',
    'volley',
    'pétanque',
  ]);
  readonly sports$ = this._sports$.asObservable();

  selectedSport: string = '';

  constructor() {}

  selectSport(sport: string) {
    this.selectedSport = sport;
  }

  addSport(sport: string) {
    this._sports$.next([...this._sports$.getValue(), sport]);
  }
}
