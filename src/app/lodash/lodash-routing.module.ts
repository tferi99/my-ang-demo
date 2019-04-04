import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page2Component} from './page2/page2.component';
import {Page1Component} from './page1/page1.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: '',   redirectTo: 'page1', pathMatch: 'full' },   // default
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)    // <-- debugging purposes only
  ],
  exports: [RouterModule]
})
export class LodashRoutingModule { }
