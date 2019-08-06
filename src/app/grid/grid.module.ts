import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {GridsterModule} from 'angular-gridster2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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

@NgModule({
  declarations: [
    MainComponent,
    GridsterContainerComponent,
    WidgetWrapperComponent,
    SampleNavComponent
  ],
  imports: [
    CommonModule,
    GridsterModule,
    NgbModule,
    StoreModule.forFeature('config', fromConfig.reducer),
    StoreModule.forFeature('gridster', fromGridster.reducer),
    EffectsModule.forFeature([GridsterEffects, ConfigEffects]),
  ]
})
export class GridModule { }
