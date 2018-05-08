import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcSolveCaseTimeComponent } from './calc-solve-case-time.component';

describe('CalcSolveCaseTimeComponent', () => {
  let component: CalcSolveCaseTimeComponent;
  let fixture: ComponentFixture<CalcSolveCaseTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcSolveCaseTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcSolveCaseTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
