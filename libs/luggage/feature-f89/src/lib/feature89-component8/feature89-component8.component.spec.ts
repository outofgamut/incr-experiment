import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component8Component } from './feature89-component8.component';

describe('Feature89Component8Component', () => {
  let component: Feature89Component8Component;
  let fixture: ComponentFixture<Feature89Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});