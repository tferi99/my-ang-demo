import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'rtr-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements OnInit, OnDestroy {
  params$: Observable<any>;
  routeSub: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const cica = this.route.snapshot.queryParamMap.get('cica');
    console.log('>>> PARAM[cica]:', cica);

    this.routeSub = this.route.queryParamMap.subscribe(
      par => console.log('>>>>>>>>>>>>>>>> PARAM:', par)
    )
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
