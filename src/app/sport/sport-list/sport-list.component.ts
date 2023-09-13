import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SportListComponent implements OnInit {
  @Input() sportList: string[] = [];
  @Output() selectSport = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelectSport(sport: string) {
    this.selectSport.emit(sport);
  }
}
