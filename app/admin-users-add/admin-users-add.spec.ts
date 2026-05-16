import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersAdd } from './admin-users-add';

describe('AdminUsersAdd', () => {
  let component: AdminUsersAdd;
  let fixture: ComponentFixture<AdminUsersAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUsersAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUsersAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
