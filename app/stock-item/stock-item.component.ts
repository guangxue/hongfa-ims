import {AfterContentChecked, AfterContentInit, Component, OnInit} from '@angular/core';
import { Button } from "primeng/button";
import { FieldsetModule } from "primeng/fieldset";
import { FormsModule, NgForm } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { TabViewModule } from "primeng/tabview";
import { ActivatedRoute } from "@angular/router";
import {RouterItemService} from "../services/router-item.service";

@Component({
  selector: 'stock-product',
  standalone: true,
  imports: [
    Button,
    FieldsetModule,
    FormsModule,
    InputTextModule,
    TabViewModule
  ],
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent implements AfterContentChecked {
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


  constructor(private route: ActivatedRoute, private routerItemService: RouterItemService) {
    this.route.paramMap.subscribe(pm => {
      this.itemCode = pm.get('code')
    });

  }

  productInfoFormSubmitted(form: NgForm) {
    console.log(form.value)
  }

  ngAfterContentChecked(): void {
    console.log("Updating router states")
    this.routerItemService.updateRouterState(false);
  }
}
