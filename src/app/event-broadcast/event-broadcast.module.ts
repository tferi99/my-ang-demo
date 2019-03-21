import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { EventProducerComponent } from './event-producer/event-producer.component';
import { Event1ConsumerComponent } from './event1-consumer/event1-consumer.component';
import { Event2ConsumerComponent } from './event2-consumer/event2-consumer.component';

@NgModule({
  declarations: [MainComponent, EventProducerComponent, Event1ConsumerComponent, Event2ConsumerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class EventBroadcastModule { }
