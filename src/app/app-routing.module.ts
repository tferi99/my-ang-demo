import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {GridsterPageComponent} from './gridster-page/gridster-page.component';
import {MainComponent as EventBroadcastMain} from './event-broadcast/main/main.component';
import {MainComponent as LodashMain} from './lodash/main/main.component';
import {MainComponent as RxjsMain} from './rxjs/main/main.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'broadcast', component: EventBroadcastMain },
  { path: 'lodash', component: LodashMain },
  { path: 'rxjs', component: RxjsMain },
  { path: 'gridster', component: GridsterPageComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },   // default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
