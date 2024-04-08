import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListehotelComponent } from './listehotel.component';

describe('ListehotelComponent', () => {
  let component: ListehotelComponent;
  let fixture: ComponentFixture<ListehotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListehotelComponent]
    });
    fixture = TestBed.createComponent(ListehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
