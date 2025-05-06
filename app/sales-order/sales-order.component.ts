import { Component } from '@angular/core';
import {SalesSearchComponent} from "../sales-search/sales-search.component";
import {SalesSearchTableComponent} from "../sales-search-table/sales-search-table.component";
import {Splitter} from "primeng/splitter";
import {PrimeTemplate} from "primeng/api";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'sales-order',
  imports: [
    SalesSearchComponent,
    Splitter,
    PrimeTemplate
  ],
  templateUrl: './sales-order.component.html',
  styleUrl: './sales-order.component.css'
})
export class SalesOrderComponent {
  protected order_number: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(url => {
      this.order_number = url.get("order_number");
    })
    console.log(this.order_number);
  }
}
