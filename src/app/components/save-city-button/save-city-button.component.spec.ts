import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCityButtonComponent } from './save-city-button.component';

describe('SaveCityButtonComponent', () => {
  let component: SaveCityButtonComponent;
  let fixture: ComponentFixture<SaveCityButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveCityButtonComponent]
    });
    fixture = TestBed.createComponent(SaveCityButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
