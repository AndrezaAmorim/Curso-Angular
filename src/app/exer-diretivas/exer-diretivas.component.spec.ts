import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerDiretivasComponent } from './exer-diretivas.component';

describe('ExerDiretivasComponent', () => {
  let component: ExerDiretivasComponent;
  let fixture: ComponentFixture<ExerDiretivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerDiretivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
