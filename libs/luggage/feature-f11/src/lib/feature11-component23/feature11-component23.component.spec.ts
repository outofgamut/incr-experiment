import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component23Component } from './feature11-component23.component';

describe('Feature11Component23Component', () => {
  let component: Feature11Component23Component;
  let fixture: ComponentFixture<Feature11Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature11Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});