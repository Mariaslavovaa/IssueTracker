import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropListComponent } from './drop-list.component';

describe('DropListComponent', () => {
  let component: DropListComponent;
  let fixture: ComponentFixture<DropListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropListComponent]
    });
    fixture = TestBed.createComponent(DropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
