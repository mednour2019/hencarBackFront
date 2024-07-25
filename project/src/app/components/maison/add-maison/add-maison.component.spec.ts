import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaisonComponent } from './add-maison.component';

describe('AddMaisonComponent', () => {
  let component: AddMaisonComponent;
  let fixture: ComponentFixture<AddMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
