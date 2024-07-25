import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLocateurComponent } from './update-locateur.component';

describe('UpdateLocateurComponent', () => {
  let component: UpdateLocateurComponent;
  let fixture: ComponentFixture<UpdateLocateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLocateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLocateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
