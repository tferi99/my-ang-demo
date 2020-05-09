import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AComponent} from './a/a.component';
import {BComponent} from './b/b.component';
import {MainComponent as RouterTestMain, MainComponent} from './main/main.component';
import {LazyPage404Component} from './lazy-page404/lazy-page404.component';

const routes: Routes = [
  { path: '', component: RouterTestMain, children: [
      { path: 'a', component: AComponent},
      { path: 'b', component: BComponent},
      { path: '', redirectTo: 'a', pathMatch: 'full' },
      { path: '**', component: LazyPage404Component },
    ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterLazyRoutingModule { }
