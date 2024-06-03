import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMesReservationsComponent } from './edit-mes-reservations.component';

describe('EditMesReservationsComponent', () => {
  let component: EditMesReservationsComponent;
  let fixture: ComponentFixture<EditMesReservationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMesReservationsComponent]
    });
    fixture = TestBed.createComponent(EditMesReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
