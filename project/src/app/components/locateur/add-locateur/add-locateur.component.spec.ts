import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocateurComponent } from './add-locateur.component';

describe('AddLocateurComponent', () => {
  let component: AddLocateurComponent;
  let fixture: ComponentFixture<AddLocateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLocateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
