import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCitiesCardComponent } from './saved-cities-card.component';

describe('SavedCitiesCardComponent', () => {
  let component: SavedCitiesCardComponent;
  let fixture: ComponentFixture<SavedCitiesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedCitiesCardComponent]
    });
    fixture = TestBed.createComponent(SavedCitiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
