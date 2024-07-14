import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApplicationTrackingComponent } from './my-application-tracking.component';

describe('MyApplicationTrackingComponent', () => {
  let component: MyApplicationTrackingComponent;
  let fixture: ComponentFixture<MyApplicationTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyApplicationTrackingComponent]
    });
    fixture = TestBed.createComponent(MyApplicationTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
