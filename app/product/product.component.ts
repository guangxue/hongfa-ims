import { Component, Input, OnChanges } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { ToolbarModule } from 'primeng/toolbar';
import { TabViewModule } from "primeng/tabview";
import { InputTextModule } from "primeng/inputtext";
import { PaginatorModule } from "primeng/paginator";
import { FieldsetModule } from "primeng/fieldset";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'product',
  standalone: true,
  imports: [
    ButtonModule,
    TableModule,
    ToolbarModule,
    TabViewModule,
    InputTextModule,
    PaginatorModule,
    FieldsetModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges {
  @Input() ItemCode!: string;

  productInfo = {
    itemcode: '',
    category: '',
    type: '',
    description: '',
    price: '',
    tprice: '',
    lprice: '',
    barcode: '',
    reorderPoint: '',
    reorderQty: '',
  };

  constructor() {
  }

  productInfoFormSubmitted(form: NgForm) {
    console.log(form.value)
  }

  ngOnChanges() {
    this.productInfo.itemcode = this.ItemCode;
    this.productInfo.category = 'PC3';

  }

}
