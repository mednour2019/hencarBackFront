import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiseLocateurComponent } from './visualise-locateur.component';

describe('VisualiseLocateurComponent', () => {
  let component: VisualiseLocateurComponent;
  let fixture: ComponentFixture<VisualiseLocateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualiseLocateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualiseLocateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
