import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConciergeComponent } from './add-concierge.component';

describe('AddConciergeComponent', () => {
  let component: AddConciergeComponent;
  let fixture: ComponentFixture<AddConciergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConciergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConciergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
