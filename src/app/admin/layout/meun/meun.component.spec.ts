import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeunComponent } from './meun.component';

describe('MeunComponent', () => {
  let component: MeunComponent;
  let fixture: ComponentFixture<MeunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeunComponent]
    });
    fixture = TestBed.createComponent(MeunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
