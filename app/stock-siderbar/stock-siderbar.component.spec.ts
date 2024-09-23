import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSiderbarComponent } from './stock-siderbar.component';

describe('StockSiderbarComponent', () => {
  let component: StockSiderbarComponent;
  let fixture: ComponentFixture<StockSiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockSiderbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockSiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
