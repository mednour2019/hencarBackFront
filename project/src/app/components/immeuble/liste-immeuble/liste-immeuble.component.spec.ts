import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeImmeubleComponent } from './liste-immeuble.component';

describe('ListeImmeubleComponent', () => {
  let component: ListeImmeubleComponent;
  let fixture: ComponentFixture<ListeImmeubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeImmeubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeImmeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
