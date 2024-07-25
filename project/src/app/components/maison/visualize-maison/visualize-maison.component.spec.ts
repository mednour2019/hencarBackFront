import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeMaisonComponent } from './visualize-maison.component';

describe('VisualizeMaisonComponent', () => {
  let component: VisualizeMaisonComponent;
  let fixture: ComponentFixture<VisualizeMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizeMaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
