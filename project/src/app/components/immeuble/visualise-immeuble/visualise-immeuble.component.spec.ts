import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiseImmeubleComponent } from './visualise-immeuble.component';

describe('VisualiseImmeubleComponent', () => {
  let component: VisualiseImmeubleComponent;
  let fixture: ComponentFixture<VisualiseImmeubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualiseImmeubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualiseImmeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
