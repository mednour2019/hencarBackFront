import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeConciergeComponent } from './liste-concierge.component';

describe('ListeConciergeComponent', () => {
  let component: ListeConciergeComponent;
  let fixture: ComponentFixture<ListeConciergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeConciergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeConciergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
