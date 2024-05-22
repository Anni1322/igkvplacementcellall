import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SApplyJobComponent } from './s-apply-job.component';

describe('SApplyJobComponent', () => {
  let component: SApplyJobComponent;
  let fixture: ComponentFixture<SApplyJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SApplyJobComponent]
    });
    fixture = TestBed.createComponent(SApplyJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
