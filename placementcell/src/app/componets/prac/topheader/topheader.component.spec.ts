import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopheaderComponent } from './topheader.component';

describe('TopheaderComponent', () => {
  let component: TopheaderComponent;
  let fixture: ComponentFixture<TopheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopheaderComponent]
    });
    fixture = TestBed.createComponent(TopheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
