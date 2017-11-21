import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PlacementComponent } from './placement/placement.component';
import { BattleComponent } from './battle/battle.component';
import { ExitComponent } from './exit/exit.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmptymapComponent } from './emptymap/emptymap.component';
import { ShiplistComponent } from './shiplist/shiplist.component';
import { EnemymapComponent } from './enemymap/enemymap.component';
import { MymapComponent } from './mymap/mymap.component';
import { MapComponent } from './map/map.component';
import { CellComponent } from './cell/cell.component';


@NgModule({
  declarations: [
    AppComponent,
    PlacementComponent,
    BattleComponent,
    ExitComponent,
    EmptymapComponent,
    ShiplistComponent,
    EnemymapComponent,
    MymapComponent,
    MapComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
