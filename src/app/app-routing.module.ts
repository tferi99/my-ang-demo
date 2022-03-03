import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {Page404Component} from "./page404/page404.component";

// main
import {MainComponent as LifecycleMain} from './lifecycle/main/main.component';
import {MainComponent as DatabindMain} from './databind/main/main.component';
import {MainComponent as DirectiveMain} from './directive/main/main.component';
import {MainComponent as RxjsMain} from './rxjs/main/main.component';
import {MainComponent as ChdMain} from './change-detection/main/main.component';
import {MainComponent as ContentMain} from './content/main/main.component';
import {MainComponent as DragDropMain} from './drag-drop/main/main.component';
import {MainComponent as EventBroadcastMain} from './event-broadcast/main/main.component';
import {MainComponent as FormTestMain} from './form-test/main/main.component';
import {MainComponent as GridMain} from './grid/main/main.component';
import {MainComponent as I18nMain} from './i18n/main/main.component';
import {MainComponent as I18n2Main} from './i18n2/main/main.component';
import {MainComponent as KeepaliveMain} from './keepalive/main/main.component';
import {MainComponent as RouterDirectMain} from './router-direct/main/main.component';
import {MainComponent as NgrxMain} from './ngrx/main/main.component';

// RxJs children
import {SnippetsComponent} from "./rxjs/snippets/snippets.component";
import {CourseListComponent} from "./rxjs/course-list/course-list.component";
import {TypeAheadComponent} from "./rxjs/type-ahead/type-ahead.component";
import {ObservablesComponent} from "./rxjs/observables/observables.component";
import {SandboxComponent} from "./rxjs/sandbox/sandbox.component";
import {FormTestComponent} from "./rxjs/form-test/form-test.component";
import {ErrorTestComponent} from "./rxjs/error-test/error-test.component";
import {FlatteningComponent} from "./rxjs/flattening/flattening.component";
import {HotVsColdComponent} from "./rxjs/hot-vs-cold/hot-vs-cold.component";
import {ImperativeFilterComponent} from "./rxjs/imperative-filter/imperative-filter.component";
import {ReactiveFilterComponent} from "./rxjs/reactive-filter/reactive-filter.component";
import {LogTestComponent} from "./rxjs/log-test/log-test.component";
import {CComponent} from "./router-direct/c/c.component";
import {DComponent} from "./router-direct/d/d.component";
import {DirectPage404Component} from "./router-direct/direct-page404/direct-page404.component";
import {AuthGuard} from "./core/guard/auth-guard";
import {LoginComponent} from "./ngrx/login/login.component";
import {ModuleTestComponent} from './module-test/module-test.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'lifecycle', component: LifecycleMain },
  { path: 'databind', component: DatabindMain },
  { path: 'rxjs', component: RxjsMain, children: [
      { path: '', redirectTo: 'observables', pathMatch: 'full'},
      { path: 'snippets', component: SnippetsComponent},
      { path: 'simplelist', component: CourseListComponent},
      { path: 'typeahead', component: TypeAheadComponent},
      { path: 'observables', component: ObservablesComponent},
      { path: 'sandbox', component: SandboxComponent},
      { path: 'form', component: FormTestComponent},
      { path: 'errorhandling', component: ErrorTestComponent},
      { path: 'flattening', component: FlatteningComponent},
      { path: 'hotcold', component: HotVsColdComponent},
      { path: 'imperativefilter', component: ImperativeFilterComponent},
      { path: 'reactivefilter', component: ReactiveFilterComponent},
      { path: 'custompipe', component: LogTestComponent},
    ]},
  { path: 'chd', component: ChdMain },
  { path: 'content', component: ContentMain },
  { path: 'directive', component: DirectiveMain },
  { path: 'dragdrop', component: DragDropMain },
  { path: 'broadcast', component: EventBroadcastMain },
  { path: 'formtest', component: FormTestMain},
  { path: 'gridster', component: GridMain},
  { path: 'i18n', component: I18nMain },
  { path: 'i18n2', component: I18n2Main },
  { path: 'keepalive', component: KeepaliveMain },
  { path: 'router-direct', component: RouterDirectMain, children: [       // direct children
      { path: 'c', component: CComponent},
      { path: 'd', component: DComponent},
      { path: '', redirectTo: 'c', pathMatch: 'full' },
      { path: '**', component: DirectPage404Component },
    ]},
  { path: 'router-lazy', loadChildren: () => import('./router-lazy/router-lazy.module').then(m => m.RouterLazyModule) },     // lazy loading (import(...))
  { path: 'ngrx', component: NgrxMain, canActivate: [AuthGuard]},
  { path: 'ngrx/login', component: LoginComponent },
  { path: 'moduletest', component: ModuleTestComponent },

  { path: '',   redirectTo: '/home', pathMatch: 'full' },   // default
  { path: '**', component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
