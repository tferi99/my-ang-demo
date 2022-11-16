import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';

import {SharedModule} from '../shared/shared.module';
/*import { FlatteningComponent } from './flattening/flattening.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ImperativeFilterComponent } from './imperative-filter/imperative-filter.component';
import { ReactiveFilterComponent } from './reactive-filter/reactive-filter.component';
import { FormTestComponent } from './form-test/form-test.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { ErrorTestComponent } from './error-test/error-test.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { ArrayCardComponent } from './observables/array-card/array-card.component';
import { ObservablesComponent } from './observables/observables.component';
import { ObservableCardComponent } from './observables/observable-card/observable-card.component';
import { EventCardComponent } from './observables/event-card/event-card.component';
import { LogTestComponent } from './log-test/log-test.component';
import { HotVsColdComponent } from './hot-vs-cold/hot-vs-cold.component';
import { AvoidMemLeakComponent } from './avoid-mem-leak/avoid-mem-leak.component';
import { SnippetsComponent } from './snippets/snippets.component';*/
import {NgxSpinnerModule} from 'ngx-spinner';
import {RouterModule} from '@angular/router';
import {AvoidMemLeakComponent} from "./avoid-mem-leak/avoid-mem-leak.component";
import {SnippetsComponent} from "./snippets/snippets.component";
import {CourseListComponent} from "./course-list/course-list.component";
import {TypeAheadComponent} from "./type-ahead/type-ahead.component";
import {ObservablesComponent} from "./observables/observables.component";
import {ObservableCardComponent} from "./observables/observable-card/observable-card.component";
import {EventCardComponent} from "./observables/event-card/event-card.component";
import {ArrayCardComponent} from "./observables/array-card/array-card.component";
import {SandboxComponent} from "./sandbox/sandbox.component";
import {LogTestComponent} from "./log-test/log-test.component";
import {FormTestComponent} from "./form-test/form-test.component";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ErrorTestComponent} from "./error-test/error-test.component";
import {FlatteningComponent} from "./flattening/flattening.component";
import {HotVsColdComponent} from "./hot-vs-cold/hot-vs-cold.component";
import {ImperativeFilterComponent} from "./imperative-filter/imperative-filter.component";
import {ReactiveFilterComponent} from "./reactive-filter/reactive-filter.component";
import { CounterPauseResumeComponent } from './counter-pause-resume/counter-pause-resume.component';

@NgModule({
  declarations: [
    MainComponent, AvoidMemLeakComponent, SnippetsComponent, CourseListComponent, TypeAheadComponent, ObservablesComponent,
    ObservableCardComponent, EventCardComponent, ArrayCardComponent, SandboxComponent, LogTestComponent, FormTestComponent,
    ErrorTestComponent, FlatteningComponent, HotVsColdComponent, ImperativeFilterComponent, ReactiveFilterComponent, CounterPauseResumeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule,
    RouterModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    MainComponent
  ],
/*  schemas: [
    NO_ERRORS_SCHEMA
  ]*/
})
export class RxjsModule { }
