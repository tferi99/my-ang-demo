import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {GridsterPageComponent} from './gridster-page/gridster-page.component';
import {MainComponent as EventBroadcastMain} from './event-broadcast/main/main.component';
import {MainComponent as RxjsMain} from './rxjs/main/main.component';
import {LodashModule} from './lodash/lodash.module';
import {MainComponent as ReduxMain} from './redux/main/main.component';
import {MainComponent as LifecycleMain} from './lifecycle/main/main.component';
import {MainComponent as FormTestMain} from './form-test/main/main.component';
import {MainComponent as NgrxMain} from './ngrx/main/main.component';
import {LoginComponent} from './ngrx/login/login.component';
import {AuthGuard} from './core/guard/auth-guard';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'broadcast', component: EventBroadcastMain },
  { path: 'rxjs', component: RxjsMain },
  { path: 'ngrx', component: NgrxMain, canActivate: [AuthGuard]
  },
  { path: 'ngrx/login', component: LoginComponent },
  { path: 'redux', component: ReduxMain },
  { path: 'gridster', component: GridsterPageComponent},
  { path: 'lifecycle', component: LifecycleMain },
  { path: 'formtest', component: FormTestMain },
  { path: 'lodash', component: LodashModule },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },   // default
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })    // <-- debugging purposes only
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
