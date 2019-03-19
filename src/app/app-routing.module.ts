import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {LodashPageComponent} from './lodash-page/lodash-page.component';
import {RxjsPageComponent} from './rxjs-page/rxjs-page.component';
import {GridsterPageComponent} from './gridster-page/gridster-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'lodash', component: LodashPageComponent },
  { path: 'rxjs', component: RxjsPageComponent },
  { path: 'gridster', component: GridsterPageComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },   // default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
