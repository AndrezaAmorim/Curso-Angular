import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerPipesComponent } from './exer-pipes.component';

describe('ExerPipesComponent', () => {
  let component: ExerPipesComponent;
  let fixture: ComponentFixture<ExerPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
