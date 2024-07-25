import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiseLocataireComponent } from './visualise-locataire.component';

describe('VisualiseLocataireComponent', () => {
  let component: VisualiseLocataireComponent;
  let fixture: ComponentFixture<VisualiseLocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualiseLocataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualiseLocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
