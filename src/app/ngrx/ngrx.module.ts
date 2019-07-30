import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import * as fromAuth from './auth.reducer';
import { LogoutComponent } from './logout/logout.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import * as fromCourse from './course.reducers';
import { CourseEffects } from './course.effects';
import { CourseListComponent } from './course-list/course-list.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';


@NgModule({
  declarations: [MainComponent, LoginComponent, LogoutComponent, CourseListComponent, SearchPanelComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', fromAuth.authReducer),       // adding module-specific slice of state
    StoreModule.forFeature('courses', fromCourse.coursesReducer),
    EffectsModule.forFeature([AuthEffects, CourseEffects]),
  ]
})
export class NgrxModule { }
