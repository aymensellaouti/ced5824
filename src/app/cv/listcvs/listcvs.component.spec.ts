import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcvsComponent } from './listcvs.component';

describe('ListcvsComponent', () => {
  let component: ListcvsComponent;
  let fixture: ComponentFixture<ListcvsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListcvsComponent]
    });
    fixture = TestBed.createComponent(ListcvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
