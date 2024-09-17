import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBlankComponent } from './stock-blank.component';

describe('InventoryBlankComponent', () => {
  let component: StockBlankComponent;
  let fixture: ComponentFixture<StockBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockBlankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
