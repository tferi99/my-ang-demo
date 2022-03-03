import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import {MomentModule} from 'ngx-moment';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MomentModule,
    NgIdleKeepaliveModule.forRoot(),
    SharedModule
  ]
})
export class KeepaliveModule { }
