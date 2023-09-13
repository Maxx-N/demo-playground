import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SportModule } from './sport/sport.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, SportModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// APP -> Racine
// CORE -> Racine. Délégué de APP
// SHARED -> Partagé
// "FEATURE MODULES" -> Fonctionnalité
