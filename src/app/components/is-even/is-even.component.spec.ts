import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsEvenComponent } from './is-even.component';

describe('IsEvenComponent', () => {
  let component: IsEvenComponent;
  let fixture: ComponentFixture<IsEvenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsEvenComponent]
    });
    fixture = TestBed.createComponent(IsEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
