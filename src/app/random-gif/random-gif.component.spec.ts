import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomGifComponent } from './random-gif.component';

describe('RandomGifComponent', () => {
  let component: RandomGifComponent;
  let fixture: ComponentFixture<RandomGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomGifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
