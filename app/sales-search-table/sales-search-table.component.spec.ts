import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSearchTableComponent } from './sales-search-table.component';

describe('SalesSearchTableComponent', () => {
  let component: SalesSearchTableComponent;
  let fixture: ComponentFixture<SalesSearchTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesSearchTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesSearchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
