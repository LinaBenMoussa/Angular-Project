import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationadminComponent } from './reservationadmin.component';

describe('ReservationadminComponent', () => {
  let component: ReservationadminComponent;
  let fixture: ComponentFixture<ReservationadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationadminComponent]
    });
    fixture = TestBed.createComponent(ReservationadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
