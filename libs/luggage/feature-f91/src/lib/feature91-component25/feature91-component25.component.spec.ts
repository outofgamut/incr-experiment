import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component25Component } from './feature91-component25.component';

describe('Feature91Component25Component', () => {
  let component: Feature91Component25Component;
  let fixture: ComponentFixture<Feature91Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature91Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});