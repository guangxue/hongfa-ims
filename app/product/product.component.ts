import { Component, Input, OnChanges } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { ToolbarModule } from 'primeng/toolbar';
import { TabViewModule } from "primeng/tabview";
import { InputTextModule } from "primeng/inputtext";
import { PaginatorModule } from "primeng/paginator";
import { FieldsetModule } from "primeng/fieldset";
import { NgForm } from "@angular/forms";
import {SearchFormComponent} from "../search-form/search-form.component";
import {SplitterModule} from "primeng/splitter";
import {ActivatedRoute} from "@angular/router";

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
        SearchFormComponent,
        SplitterModule,
    ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //@Input() ItemCode!: string;
  itemCode: string | null = null;

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

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      this.itemCode = pm.get('code')
    } )
  }

  productInfoFormSubmitted(form: NgForm) {
    console.log(form.value)
  }


}
