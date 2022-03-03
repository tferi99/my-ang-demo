import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import {GridsterModule} from 'angular-gridster2';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {WidgetWrapperComponent} from './widget-wrapper/widget-wrapper.component';
import {SampleNavComponent} from './sample-nav/sample-nav.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import {GridsterContainerComponent} from './gridster-container/gridster-container.component';
import * as fromGridster from './store/gridster/gridster.reducer';
import * as fromConfig from './store/config/config.reducer';
import {EffectsModule} from '@ngrx/effects';
import {GridsterEffects} from './store/gridster/gridster.effects';
import {ConfigEffects} from './store/config/config.effects';
import { CounterComponent } from './widgets/counter/counter.component';
import * as fromCounter from './store/counter/counter.reducer';
import { SimpleInputComponent } from './widgets/simple-input/simple-input.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    MainComponent,
    GridsterContainerComponent,
    WidgetWrapperComponent,
    SampleNavComponent,
    CounterComponent,
    SimpleInputComponent,
  ],
  imports: [
    CommonModule,
    GridsterModule,
    StoreModule.forFeature('config', fromConfig.reducer),
    StoreModule.forFeature('gridster', fromGridster.reducer),
    EffectsModule.forFeature([GridsterEffects, ConfigEffects]),
    StoreModule.forFeature('counters', fromCounter.reducer),
  ]
})
export class GridModule { }
