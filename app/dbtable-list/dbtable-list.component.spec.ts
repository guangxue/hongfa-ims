import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtableListComponent } from './dbtable-list.component';

describe('DbtableListComponent', () => {
  let component: DbtableListComponent;
  let fixture: ComponentFixture<DbtableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbtableListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbtableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
