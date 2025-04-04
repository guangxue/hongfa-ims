import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemComponent } from './stock-item.component';

describe('InventoryProductComponent', () => {
  let component: StockItemComponent;
  let fixture: ComponentFixture<StockItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
