import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImmeubleComponent } from './add-immeuble.component';

describe('AddImmeubleComponent', () => {
  let component: AddImmeubleComponent;
  let fixture: ComponentFixture<AddImmeubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImmeubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImmeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
