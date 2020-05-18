import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerContadorComponent } from './exer-contador.component';

describe('ExerContadorComponent', () => {
  let component: ExerContadorComponent;
  let fixture: ComponentFixture<ExerContadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerContadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
