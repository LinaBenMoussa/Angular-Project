import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeImageHotelComponent } from './liste-image-hotel.component';

describe('ListeImageHotelComponent', () => {
  let component: ListeImageHotelComponent;
  let fixture: ComponentFixture<ListeImageHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeImageHotelComponent]
    });
    fixture = TestBed.createComponent(ListeImageHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
