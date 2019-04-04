import {Observable} from 'rxjs';
import {CardType} from './card-type';

export class ObservabledDemoData {
  dataAsArray: Array<number> = [];
  completed = false;
  errorFound = false;
  color = 'primary';

  constructor(public cardType: CardType, public title: string, public subtitle: string, public observable?: Observable<number>) {
    if (observable && cardType === CardType.ARRAY) {
      observable.subscribe(
        v => this.dataAsArray.push(v),
        v => {
          this.errorFound = true;
          this.color = 'danger';
        },
        () => {
          this.completed = true;
          this.color = 'success';
        }
      );
    }
  }
}
