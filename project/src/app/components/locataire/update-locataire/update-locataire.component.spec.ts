import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLocataireComponent } from './update-locataire.component';

describe('UpdateLocataireComponent', () => {
  let component: UpdateLocataireComponent;
  let fixture: ComponentFixture<UpdateLocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLocataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
