import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component5Component } from './feature72-component5.component';

describe('Feature72Component5Component', () => {
  let component: Feature72Component5Component;
  let fixture: ComponentFixture<Feature72Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});