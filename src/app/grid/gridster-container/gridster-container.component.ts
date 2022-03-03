import {Component, OnDestroy, OnInit} from '@angular/core';
import {GridsterConfig} from 'angular-gridster2';
import {NGXLogger} from 'ngx-logger';
import {Subject, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import * as _ from 'lodash';
import {selectGrids} from '../store/gridster/gridster.selector';
import {selectGridEditable} from '../store/config/config.selector';
import {GridsterChangedAction} from '../store/gridster/gridster.actions';
import {WacGridsterItem, WidgetTypeEnum} from '../grid-api.service';
import {AppState} from "../../reducers";
import {GridsterItem, GridsterItemComponentInterface} from "angular-gridster2/lib/gridsterItem.interface";

@Component({
  selector: 'grid-gridster-container',
  templateUrl: './gridster-container.component.html',
  styleUrls: ['./gridster-container.component.scss']
})
export class GridsterContainerComponent implements OnInit, OnDestroy {
  // static change detection of gridster
  static inited = false;
  static changeDetector = new Subject<boolean>();

  WidgetTypeEnum = WidgetTypeEnum;  // this way we can reference this from the template

  options: GridsterConfig = {
    itemChangeCallback: GridsterContainerComponent.itemChange,
    itemResizeCallback: GridsterContainerComponent.itemResize,
    gridType: 'fit',
    displayGrid: 'none',
    margin: 15,
    draggable: {
      enabled: false,
    },
    resizable: {
      enabled: false,
    },
    swap: false,
    pushItems: true,
    maxCols: 6,
    maxRows: 6
  };

  editable = false;
  dashboard: Array<WacGridsterItem> = [];

  // subscriptions
  editableSubscription!: Subscription;
  gridSubscription!: Subscription;
//  changeDetectorSubscription: Subscription;


  static itemChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
/*    if (!GridsterContainerComponent.inited) {
      console.log('GRIDSTER itemChange - IGNORED:', item, itemComponent);
    } else {
      console.log('GRIDSTER itemChange:', item, itemComponent);
      GridsterContainerComponent.changeDetector.next(GridsterContainerComponent.inited);
    }*/
  }
  static itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
/*    if (!GridsterContainerComponent.inited) {
      console.log('GRIDSTER itemResize - IGNORED:', item, itemComponent);
    } else {
      console.log('GRIDSTER itemResize:', item, itemComponent);
      GridsterContainerComponent.changeDetector.next(GridsterContainerComponent.inited);
    }*/
  }

  constructor(private log: NGXLogger, private store: Store<AppState>) { }

  ngOnInit() {
    // we need it here and also in template -> unsubscribe in ngOnDestroy!
    this.gridSubscription = this.store.pipe(
        select(selectGrids),
        tap(grids => console.log('GRIDS FROM STORE:', grids))
    ).subscribe(
      grids => {
        this.dashboard = _.cloneDeep(grids);
      }
    );

    // we need it here and also in template -> unsubscribe in ngOnDestroy!
    this.editableSubscription = this.store.pipe(
      tap(v => console.log()),
      select(selectGridEditable)
    ).subscribe(
      editable => this.changeEditable(editable)
    );

/*    this.changeDetectorSubscription = GridsterContainerComponent.changeDetector.pipe(
//      debounceTime(2000)
    )
    .subscribe(
//      x => this.store.dispatch(new GridsterChangedAction({grids: this.dashboard}))
    );*/

    setTimeout(() => GridsterContainerComponent.inited = true, 2000);
  }

  ngOnDestroy(): void {
    this.editableSubscription.unsubscribe();
    this.gridSubscription.unsubscribe();
//    this.changeDetectorSubscription.unsubscribe();
  }

  pushWidget() {
    const newWidget: WacGridsterItem = { x: 0, y: 0, cols: 1, rows: 1, widgetType: WidgetTypeEnum.EMPTY };
    this.dashboard.push(newWidget);
  }

  removeWidget(event: any, item: WacGridsterItem) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  changeEditable(editable: boolean) {
    {
      const prevEditable = this.editable;

      this.log.debug('Grid Editable changed:', editable);
      this.editable = editable;
      if (this.options.draggable) {
        this.options.draggable.enabled = editable;
      }
      if (this.options.resizable) {
        this.options.resizable.enabled = editable;
      }
      if (!editable) {
        this.options.displayGrid = 'none';
      } else {
        this.options.displayGrid = 'always';
      }

      if (this.options.api && this.options.api.optionsChanged) {               // options.api is undefined first (why?)
        this.options.api.optionsChanged();
      }
      if (!editable && prevEditable) {
        this.store.dispatch(new GridsterChangedAction({grids: this.dashboard}));
      }
    }
  }
}
