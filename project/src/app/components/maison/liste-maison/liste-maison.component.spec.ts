import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMaisonComponent } from './liste-maison.component';

describe('ListeMaisonComponent', () => {
  let component: ListeMaisonComponent;
  let fixture: ComponentFixture<ListeMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
