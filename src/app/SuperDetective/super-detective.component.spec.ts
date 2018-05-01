import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperDetectiveComponent } from './super-detective.component';

describe('SuperDetectiveComponent', () => {
  let component: SuperDetectiveComponent;
  let fixture: ComponentFixture<SuperDetectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperDetectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperDetectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
