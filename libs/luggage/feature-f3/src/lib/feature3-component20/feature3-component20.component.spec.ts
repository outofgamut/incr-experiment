import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component20Component } from './feature3-component20.component';

describe('Feature3Component20Component', () => {
  let component: Feature3Component20Component;
  let fixture: ComponentFixture<Feature3Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});