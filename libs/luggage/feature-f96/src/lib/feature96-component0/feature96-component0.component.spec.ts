import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component0Component } from './feature96-component0.component';

describe('Feature96Component0Component', () => {
  let component: Feature96Component0Component;
  let fixture: ComponentFixture<Feature96Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});