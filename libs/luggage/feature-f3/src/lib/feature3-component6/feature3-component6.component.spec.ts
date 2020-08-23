import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component6Component } from './feature3-component6.component';

describe('Feature3Component6Component', () => {
  let component: Feature3Component6Component;
  let fixture: ComponentFixture<Feature3Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});