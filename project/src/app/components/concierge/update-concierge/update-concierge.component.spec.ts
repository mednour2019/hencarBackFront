import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConciergeComponent } from './update-concierge.component';

describe('UpdateConciergeComponent', () => {
  let component: UpdateConciergeComponent;
  let fixture: ComponentFixture<UpdateConciergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateConciergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConciergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
