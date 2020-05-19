import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AComponent} from './a/a.component';
import {BComponent} from './b/b.component';
import {MainComponent as RouterTestMain, MainComponent} from './main/main.component';
import {LazyPage404Component} from './lazy-page404/lazy-page404.component';
import {PersonsComponent} from './persons/persons.component';
import {PersonDetailComponent} from './person-detail/person-detail.component';
import {PersonEditComponent} from './person-edit/person-edit.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: RouterTestMain, children: [
      { path: 'a', component: AComponent},
      { path: 'b', component: BComponent},
      { path: 'persons', component: PersonsComponent, children: [
          { path: 'persons/:id', component: PersonDetailComponent},
          { path: 'persons/:id/edit', component: PersonEditComponent},
        ]},
      { path: '', redirectTo: 'a', pathMatch: 'full' },
      { path: '**', component: LazyPage404Component },
    ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RouterLazyRoutingModule { }
