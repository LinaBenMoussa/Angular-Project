import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImageHotelComponent } from './add-image-hotel.component';

describe('AddImageHotelComponent', () => {
  let component: AddImageHotelComponent;
  let fixture: ComponentFixture<AddImageHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddImageHotelComponent]
    });
    fixture = TestBed.createComponent(AddImageHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
