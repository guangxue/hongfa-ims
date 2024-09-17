import {Component, Output} from '@angular/core';
import {Button} from "primeng/button";
import {FieldsetModule} from "primeng/fieldset";
import {FormsModule, NgForm} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {TabViewModule} from "primeng/tabview";
import {ActivatedRoute} from "@angular/router";

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
export class StockItemComponent {
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

  @Output()
  panels: number[] = [30, 70];
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      this.itemCode = pm.get('code')
    } )
  }

  productInfoFormSubmitted(form: NgForm) {
    console.log(form.value)
  }
}
