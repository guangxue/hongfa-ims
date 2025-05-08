import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {SalesSearchComponent} from "../sales-search/sales-search.component";
import {SalesSearchTableComponent} from "../sales-search-table/sales-search-table.component";
import {Splitter} from "primeng/splitter";
import {PrimeTemplate} from "primeng/api";
import {ActivatedRoute} from "@angular/router";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'sales-order',
  imports: [
  ],
  templateUrl: './sales-order.component.html',
  styleUrl: './sales-order.component.css'
})
export class SalesOrderComponent {
  protected order_number: string | null = null;

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: object) {
    this.route.paramMap.subscribe(url => {
      this.order_number = url.get("order_number");
    })
    console.log(this.order_number);

    if(isPlatformBrowser(this.platformId)) {
      const importData = localStorage.getItem('importData');
      if (importData) {
        const parseData = JSON.parse(importData);
        console.log(parseData);
      }
    }

  }
}
