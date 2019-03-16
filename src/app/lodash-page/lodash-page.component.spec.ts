import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodashPageComponent } from './lodash-page.component';

describe('LodashPageComponent', () => {
  let component: LodashPageComponent;
  let fixture: ComponentFixture<LodashPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodashPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
