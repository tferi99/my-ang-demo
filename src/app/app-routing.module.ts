import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {MainComponent as EventBroadcastMain} from './event-broadcast/main/main.component';
import {MainComponent as RxjsMain} from './rxjs/main/main.component';
import {MainComponent as LifecycleMain} from './lifecycle/main/main.component';
import {MainComponent as FormTestMain} from './form-test/main/main.component';
import {MainComponent as NgrxMain} from './ngrx/main/main.component';
import {MainComponent as GridMain} from './grid/main/main.component';
import {MainComponent as I18nMain} from './i18n/main/main.component';
import {MainComponent as I18n2Main} from './i18n2/main/main.component';
import {MainComponent as KeepaliveMain} from './keepalive/main/main.component';
import {MainComponent as ChdMain} from './change-detection/main/main.component';
import {MainComponent as DatabindMain} from './databind/main/main.component';
import {MainComponent as ContentMain} from './content/main/main.component';
import {MainComponent as DirectiveMain} from './directive/main/main.component';
import {MainComponent as RouterDirectMain} from './router-direct/main/main.component';

import {LoginComponent} from './ngrx/login/login.component';
import {AuthGuard} from './core/guard/auth-guard';
import {CComponent} from './router-direct/c/c.component';
import {DComponent} from './router-direct/d/d.component';
import {DirectPage404Component} from './router-direct/direct-page404/direct-page404.component';
import {Page404Component} from './page404/page404.component';
import {ObservablesComponent} from './rxjs/observables/observables.component';
import {CourseListComponent} from './rxjs/course-list/course-list.component';
import {ImperativeFilterComponent} from './rxjs/imperative-filter/imperative-filter.component';
import {FlatteningComponent} from './rxjs/flattening/flattening.component';
import {FormTestComponent} from './rxjs/form-test/form-test.component';
import {TypeAheadComponent} from './rxjs/type-ahead/type-ahead.component';
import {ErrorTestComponent} from './rxjs/error-test/error-test.component';
import {ReactiveFilterComponent} from './rxjs/reactive-filter/reactive-filter.component';
import {LogTestComponent} from './rxjs/log-test/log-test.component';
import {HotVsColdComponent} from './rxjs/hot-vs-cold/hot-vs-cold.component';
import {SnippetsComponent} from './rxjs/snippets/snippets.component';
import {SandboxComponent} from './rxjs/sandbox/sandbox.component';
import {ModuleTestComponent} from './module-test/module-test.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'broadcast', component: EventBroadcastMain },
  { path: 'rxjs', component: RxjsMain, children: [
      { path: '', redirectTo: 'observables', pathMatch: 'full'},
      { path: 'observables', component: ObservablesComponent},
      { path: 'simplelist', component: CourseListComponent},
      { path: 'imperativefilter', component: ImperativeFilterComponent},
      { path: 'reactivefilter', component: ReactiveFilterComponent},
      { path: 'flattening', component: FlatteningComponent},
      { path: 'form', component: FormTestComponent},
      { path: 'typeahead', component: TypeAheadComponent},
      { path: 'errorhandling', component: ErrorTestComponent},
      { path: 'custompipe', component: LogTestComponent},
      { path: 'hotcold', component: HotVsColdComponent},
      { path: 'snippets', component: SnippetsComponent},
      { path: 'sandbox', component: SandboxComponent},
  ]},
  { path: 'ngrx', component: NgrxMain, canActivate: [AuthGuard]},
  { path: 'ngrx/login', component: LoginComponent },
  { path: 'gridster', component: GridMain},
  { path: 'keepalive', component: KeepaliveMain },
  { path: 'lifecycle', component: LifecycleMain },
  { path: 'formtest', component: FormTestMain },
  { path: 'i18n', component: I18nMain },
  { path: 'i18n2', component: I18n2Main },
  { path: 'chd', component: ChdMain },
  { path: 'databind', component: DatabindMain },
  { path: 'content', component: ContentMain },
  { path: 'directive', component: DirectiveMain },
  { path: 'router-direct', component: RouterDirectMain, children: [       // direct children
      { path: 'c', component: CComponent},
      { path: 'd', component: DComponent},
      { path: '', redirectTo: 'c', pathMatch: 'full' },
      { path: '**', component: DirectPage404Component },
  ]},
  { path: 'router-lazy', loadChildren: () => import('./router-lazy/router-lazy.module').then(m => m.RouterLazyModule) },     // lazy loading
  { path: 'moduletest', component: ModuleTestComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },   // default
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })    // <-- debugging purposes only
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
