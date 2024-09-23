import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { FieldsetModule } from "primeng/fieldset";
import { FormsModule, NgForm } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { TabViewModule } from "primeng/tabview";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { RouterItemService } from "../services/router-item.service";
import { SplitterModule } from "primeng/splitter";
import { SearchFormComponent } from "../search-form/search-form.component";
import { TableModule } from "primeng/table";
import { DatabaseBirchItems } from "../interface/database-birch-items";

@Component({
  selector: 'stock-product',
  standalone: true,
  imports: [
    Button,
    FieldsetModule,
    FormsModule,
    InputTextModule,
    TabViewModule,
    SplitterModule,
    RouterLink,
    SearchFormComponent,
    TableModule
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
  DBirchItems: DatabaseBirchItems[] = [
    {
      itemcode: '013810-284BEIGE',
      qtyShelf: '100',
      taggedBoxNum: '3',
      qtyTagged: '300',
      looseBoxNum: '8',
      qtyLoose: '300',
      tagsLeft: '300'
    },
    {
      itemcode: '013810-294MUSTAN',
      qtyShelf: '100',
      taggedBoxNum: '3',
      qtyTagged: '300',
      looseBoxNum: '8',
      qtyLoose: '300',
      tagsLeft: '300'
    },
    {
      itemcode: '013810-310BLACK',
      qtyShelf: '100',
      taggedBoxNum: '3',
      qtyTagged: '300',
      looseBoxNum: '8',
      qtyLoose: '300',
      tagsLeft: '300'
    },
    {
      itemcode: '013810-318DRKBLU',
      qtyShelf: '100',
      taggedBoxNum: '3',
      qtyTagged: '300',
      looseBoxNum: '8',
      qtyLoose: '300',
      tagsLeft: '300'
    },
  ]

  constructor(private route: ActivatedRoute, private routerItemService: RouterItemService) {
    this.route.paramMap.subscribe(pm => {
      this.itemCode = pm.get('code')
    });

  }

  productInfoFormSubmitted(form: NgForm) {
    console.log(form.value)
  }
}
