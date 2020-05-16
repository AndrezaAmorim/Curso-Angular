import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerDataBindingComponent } from './exer-data-binding.component';

describe('ExerDataBindingComponent', () => {
  let component: ExerDataBindingComponent;
  let fixture: ComponentFixture<ExerDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
