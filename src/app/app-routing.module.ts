import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacementComponent } from './placement/placement.component';
import { BattleComponent } from './battle/battle.component';
import { ExitComponent } from './exit/exit.component';
import { MapComponent } from './map/map.component';
import { CellComponent } from './cell/cell.component';


const routes: Routes = [
  { path: '', redirectTo: '/placement', pathMatch: 'full' },
  { path: 'placement', component: PlacementComponent },
  { path: 'battle', component: BattleComponent },
  { path: 'exit', component: ExitComponent },
  { path: 'map', component: MapComponent },
  { path: 'cell', component: CellComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
