import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component25Component } from './feature62-component25.component';

describe('Feature62Component25Component', () => {
  let component: Feature62Component25Component;
  let fixture: ComponentFixture<Feature62Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature62Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});