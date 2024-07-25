import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatMaisonComponent } from './etat-maison.component';

describe('EtatMaisonComponent', () => {
  let component: EtatMaisonComponent;
  let fixture: ComponentFixture<EtatMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatMaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
