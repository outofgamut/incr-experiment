import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component2Component } from './feature70-component2.component';

describe('Feature70Component2Component', () => {
  let component: Feature70Component2Component;
  let fixture: ComponentFixture<Feature70Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});