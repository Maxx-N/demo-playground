import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlogModule } from '@gpeel/plog';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [BrowserModule, PlogModule.forRoot(environment)],
  exports: [BrowserModule, PlogModule],
})
export class CoreModule {}

// NAVBAR