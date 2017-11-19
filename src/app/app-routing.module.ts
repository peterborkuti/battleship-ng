import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacementComponent } from './placement/placement.component';
import { BattleComponent } from './battle/battle.component';
import { ExitComponent } from './exit/exit.component';

const routes: Routes = [
  { path: '', redirectTo: '/placement', pathMatch: 'full' },
  { path: 'placement', component: PlacementComponent },
  { path: 'battle', component: BattleComponent },
  { path: 'exit', component: ExitComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
