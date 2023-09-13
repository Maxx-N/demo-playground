import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SportDetailComponent } from './sport-detail/sport-detail.component';
import { SportListComponent } from './sport-list/sport-list.component';
import { SportComponent } from './sport.component';

@NgModule({
  declarations: [SportComponent, SportListComponent, SportDetailComponent],
  imports: [SharedModule],
  exports: [SportComponent],
})
export class SportModule {}
