import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiseConciergeComponent } from './visualise-concierge.component';

describe('VisualiseConciergeComponent', () => {
  let component: VisualiseConciergeComponent;
  let fixture: ComponentFixture<VisualiseConciergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualiseConciergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualiseConciergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
