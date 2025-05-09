import {AfterContentInit, Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import {TableModule} from "primeng/table";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'sales-order',
  imports: [
    TableModule,
    NgOptimizedImage
  ],
  templateUrl: './sales-order.component.html',
  styleUrl: './sales-order.component.css',
})
export class SalesOrderComponent implements AfterContentInit {
  protected orderNumber: string | null = null;
  orderItems: any[] = [];

  constructor(private route: ActivatedRoute, private localStorage: LocalStorageService) {}

  ngAfterContentInit(): void {
    const imported_order = this.localStorage.get('sales-order');
    if (imported_order) {
      const orderInfo  = JSON.parse(imported_order);
      this.orderNumber = orderInfo.orderNumber;
      this.orderItems = orderInfo.orderItems;
      console.log(orderInfo);
    } else {
      console.log("Get order info from database")
      this.route.paramMap.subscribe((url) => {
        this.orderNumber = url.get('order_number');
      });
    }
  }
}
