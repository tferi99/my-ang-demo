import { GridsterItem } from 'angular-gridster2';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SERVER_API_CONTEXT_PATH } from '../shared/app.constants';
import {NGXLogger} from 'ngx-logger';
import {map} from 'rxjs/operators';


export enum WidgetTypeEnum {
  EMPTY = 'wac-widget-empty',
  PLACEHOLDER = 'wac-widget-placeholder',
  INPUT = 'grid-simple-input',
  COUNTER = 'grid-counter'
}
export interface WacGridster {
  grids: Array<WacGridsterItem>;
}
export interface WacGridsterItem extends GridsterItem {
  widgetType: WidgetTypeEnum;
}

@Injectable({
  providedIn: 'root',
})
export class GridApiService {

  constructor(private http: HttpClient, private log: NGXLogger) {
  }

  getGrid(): Observable<WacGridster> {
    return this.http.get<WacGridster>(SERVER_API_CONTEXT_PATH + '/gridster');
  }

  saveGrid(grid: WacGridster): Observable<any> {
    console.log('Saving grids by API:', grid);
    return this.http.post<WacGridster>(SERVER_API_CONTEXT_PATH + '/gridster', grid).pipe(
      map(result => grid)           // returning pure input object directly
    );
  }
}
