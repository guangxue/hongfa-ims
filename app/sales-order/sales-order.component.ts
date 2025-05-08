import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'sales-order',
  imports: [],
  templateUrl: './sales-order.component.html',
  styleUrl: './sales-order.component.css',
})
export class SalesOrderComponent {
  protected order_number: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private localStorage: LocalStorageService,
  ) {
    this.route.paramMap.subscribe((url) => {
      this.order_number = url.get('order_number');
    });

    const data = this.localStorage.get('importData');
    if (data) {
      const parseData = JSON.parse(data);
      console.log(parseData.orderData);
    }
  }
}
