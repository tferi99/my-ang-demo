import {Injectable} from '@angular/core';
import {DragDropSimpleService} from './drag-drop-simpe.service';
import {NGXLogger} from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class DragDropSimpleConsumerService {

  constructor(
    private dds: DragDropSimpleService,
    private logger: NGXLogger,
  ) {
      logger.log('DragDropSimpleConsumerService created');
      dds.emitter.subscribe(
      dde => logger.log('############################## DRAG-DROP SIMPLE ##############################', dde)
    );
  }
}
