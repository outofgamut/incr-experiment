import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component11Component } from './feature65-component11.component';

describe('Feature65Component11Component', () => {
  let component: Feature65Component11Component;
  let fixture: ComponentFixture<Feature65Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature65Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});