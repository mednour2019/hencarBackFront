import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMaisonComponent } from './update-maison.component';

describe('UpdateMaisonComponent', () => {
  let component: UpdateMaisonComponent;
  let fixture: ComponentFixture<UpdateMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
