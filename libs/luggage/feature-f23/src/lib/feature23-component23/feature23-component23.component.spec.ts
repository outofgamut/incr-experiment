import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component23Component } from './feature23-component23.component';

describe('Feature23Component23Component', () => {
  let component: Feature23Component23Component;
  let fixture: ComponentFixture<Feature23Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature23Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});