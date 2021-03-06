import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import * as fromAuth from './store/auth/auth.reducer';
import { LogoutComponent } from './logout/logout.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth/auth.effects';
import * as fromCourse from './store/course/course.reducers';
import { CourseEffects } from './store/course/course.effects';
import { CourseListComponent } from './course-list/course-list.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import * as fromSpinner from './store/spinner/spinner.reducer';
import { SpinnerEffects } from './store/spinner/spinner.effects';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [MainComponent, LoginComponent, LogoutComponent, CourseListComponent, SearchPanelComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', fromAuth.authReducer),       // adding module-specific slice of state
    StoreModule.forFeature('courses', fromCourse.coursesReducer),
    StoreModule.forFeature('spinner', fromSpinner.reducer),
    EffectsModule.forFeature([AuthEffects, CourseEffects, SpinnerEffects]),
    SharedModule
  ]
})
export class NgrxModule {
  constructor() {
    console.log('######################################## ngrx ########################################');
  }
}
