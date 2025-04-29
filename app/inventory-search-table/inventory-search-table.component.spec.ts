import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySearchTableComponent } from './inventory-search-table.component';

describe('InventorySearchTableComponent', () => {
  let component: InventorySearchTableComponent;
  let fixture: ComponentFixture<InventorySearchTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventorySearchTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorySearchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
