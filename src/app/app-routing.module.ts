import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../services/guard/auth-guard.service';
import { GuestGuardService } from '../services/guard/guest-guard.service';
import { EventsComponent } from './components/events/events.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { LkComponent } from './components/lk/lk.component';
import { PanelComponent } from './components/panel/panel.component';
import { TileItemComponent } from './components/panel/tile-item/tile-item.component';
import { TableItemComponent} from './components/panel/table-item/table-item.component';

const panelRoutes: Routes = [
  { path: 'events/tile', component: TileItemComponent},
  { path: 'events/table', component: TableItemComponent },
  { path: '', redirectTo: 'events/tile', pathMatch: 'full'},
  { path: 'events', redirectTo: 'events/tile', pathMatch: 'full'}
];

const routes: Routes = [
  { path: 'login', component: AuthorizationComponent, canActivate: [GuestGuardService] },
  { path: 'events', component: EventsComponent, canActivate: [AuthGuardService] },
  { path: 'panel', component: PanelComponent, canActivate: [AuthGuardService], children: panelRoutes },
  { path: 'lk', component: LkComponent, canActivate: [AuthGuardService] },
  // { path: '**', component: NotFoundComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
