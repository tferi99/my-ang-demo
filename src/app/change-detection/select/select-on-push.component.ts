import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ChdService} from '../chd.service';
import {Observable, Subscription} from 'rxjs';
import {Course} from '../../shared/model/course.model';
import {ApiService} from '../../core/service/api.service';
import {Skill} from "../skill.model";

@Component({
  selector: 'chd-select-onpush',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectOnPushComponent implements OnInit, OnDestroy {
  @Input() options: Skill[] = [];

  type = 'Default';
  onPush = true;
  limit = 2;

  courses$: Observable<Course[]> = this.apiService.getCoursesLimit(this.limit);
  courses?: Course[];
  coursesSubs?: Subscription;

  constructor(private chdService: ChdService, private apiService: ApiService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.cleanup();
  }

  getChdCurrentValue(): number {
    return this.chdService.getCurrentValue();
  }

  change() {}

  trigger() {}

  fetchRest() {
    this.cleanup();
    this.coursesSubs = this.apiService.getCoursesLimit(2).subscribe(
      res => this.courses = res
    );
  }

  cleanup() {
    if (this.coursesSubs) {
      this.coursesSubs.unsubscribe();
    }
  }
}
