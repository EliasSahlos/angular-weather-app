import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTitleComponent } from './city-title.component';

describe('CityTitleComponent', () => {
  let component: CityTitleComponent;
  let fixture: ComponentFixture<CityTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityTitleComponent]
    });
    fixture = TestBed.createComponent(CityTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
