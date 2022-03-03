import { Injectable } from '@angular/core';
import {DragDropListService} from './drag-drop-list.service';
import {NGXLogger} from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class DragDropListConsumerService {

  constructor(
    private dds: DragDropListService,
    private logger: NGXLogger,
  ) {
      logger.log('DragDropListConsumerService created');
      dds.emitter.subscribe(
      dde => this.logger.log('############################## DRAG-DROP LIST ##############################', dde)
    );
  }
}
