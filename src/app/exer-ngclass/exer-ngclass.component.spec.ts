import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerNgclassComponent } from './exer-ngclass.component';

describe('ExerNgclassComponent', () => {
  let component: ExerNgclassComponent;
  let fixture: ComponentFixture<ExerNgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerNgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
