import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import {MomentModule} from 'ngx-moment';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MomentModule,
    NgIdleKeepaliveModule.forRoot()
  ]
})
export class KeepaliveModule { }
