import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component5Component } from './feature99-component5.component';

describe('Feature99Component5Component', () => {
  let component: Feature99Component5Component;
  let fixture: ComponentFixture<Feature99Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});