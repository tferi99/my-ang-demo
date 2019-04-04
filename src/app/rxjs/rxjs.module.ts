import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ImperativeFilterComponent } from './imperative-filter/imperative-filter.component';
import { ReactiveFilterComponent } from './reactive-filter/reactive-filter.component';
import { FormTestComponent } from './form-test/form-test.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlatteningComponent } from './flattening/flattening.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { ErrorTestComponent } from './error-test/error-test.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { ArrayCardComponent } from './observables/array-card/array-card.component';
import { ObservablesComponent } from './observables/observables.component';
import { ObservableCardComponent } from './observables/observable-card/observable-card.component';

@NgModule({
  declarations: [
    MainComponent, CourseListComponent, ImperativeFilterComponent, ReactiveFilterComponent,
    FormTestComponent, FlatteningComponent, TypeAheadComponent, ErrorTestComponent, SandboxComponent,
    ArrayCardComponent, ObservablesComponent, ObservableCardComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ]
})
export class RxjsModule { }
