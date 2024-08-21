import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCdComponent } from './test-cd.component';

describe('TestCdComponent', () => {
  let component: TestCdComponent;
  let fixture: ComponentFixture<TestCdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCdComponent]
    });
    fixture = TestBed.createComponent(TestCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
