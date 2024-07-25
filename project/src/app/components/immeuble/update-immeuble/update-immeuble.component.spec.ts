import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateImmeubleComponent } from './update-immeuble.component';

describe('UpdateImmeubleComponent', () => {
  let component: UpdateImmeubleComponent;
  let fixture: ComponentFixture<UpdateImmeubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateImmeubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateImmeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
