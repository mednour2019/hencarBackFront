import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLocateurComponent } from './liste-locateur.component';

describe('ListeLocateurComponent', () => {
  let component: ListeLocateurComponent;
  let fixture: ComponentFixture<ListeLocateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLocateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLocateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
