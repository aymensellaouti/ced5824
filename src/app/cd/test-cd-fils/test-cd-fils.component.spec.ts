import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCdFilsComponent } from './test-cd-fils.component';

describe('TestCdFilsComponent', () => {
  let component: TestCdFilsComponent;
  let fixture: ComponentFixture<TestCdFilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCdFilsComponent]
    });
    fixture = TestBed.createComponent(TestCdFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
