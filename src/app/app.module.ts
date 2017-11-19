import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlacementComponent } from './placement/placement.component';
import { BattleComponent } from './battle/battle.component';
import { ExitComponent } from './exit/exit.component';


@NgModule({
  declarations: [
    AppComponent,
    PlacementComponent,
    BattleComponent,
    ExitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
