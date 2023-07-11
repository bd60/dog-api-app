import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPicturesComponent } from './dog-pictures.component';

describe('DogPicturesComponent', () => {
  let component: DogPicturesComponent;
  let fixture: ComponentFixture<DogPicturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogPicturesComponent]
    });
    fixture = TestBed.createComponent(DogPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
