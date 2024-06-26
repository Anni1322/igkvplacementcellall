import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSidebarComponent } from './c-sidebar.component';

describe('CSidebarComponent', () => {
  let component: CSidebarComponent;
  let fixture: ComponentFixture<CSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CSidebarComponent]
    });
    fixture = TestBed.createComponent(CSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
