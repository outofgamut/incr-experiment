import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component12Component } from './feature78-component12.component';

describe('Feature78Component12Component', () => {
  let component: Feature78Component12Component;
  let fixture: ComponentFixture<Feature78Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature78Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});