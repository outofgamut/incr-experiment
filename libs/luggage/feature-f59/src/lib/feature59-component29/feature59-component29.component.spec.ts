import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component29Component } from './feature59-component29.component';

describe('Feature59Component29Component', () => {
  let component: Feature59Component29Component;
  let fixture: ComponentFixture<Feature59Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});