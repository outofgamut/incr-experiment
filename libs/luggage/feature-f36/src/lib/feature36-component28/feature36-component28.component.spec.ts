import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component28Component } from './feature36-component28.component';

describe('Feature36Component28Component', () => {
  let component: Feature36Component28Component;
  let fixture: ComponentFixture<Feature36Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});