import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifCategoriesComponent } from './gif-categories.component';

describe('GifCategoriesComponent', () => {
  let component: GifCategoriesComponent;
  let fixture: ComponentFixture<GifCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
