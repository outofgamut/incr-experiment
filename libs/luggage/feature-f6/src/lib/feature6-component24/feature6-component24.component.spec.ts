import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component24Component } from './feature6-component24.component';

describe('Feature6Component24Component', () => {
  let component: Feature6Component24Component;
  let fixture: ComponentFixture<Feature6Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});