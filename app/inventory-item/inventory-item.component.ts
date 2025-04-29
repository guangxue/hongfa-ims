import {Component} from '@angular/core';
import {Splitter} from "primeng/splitter";
import {PrimeTemplate} from "primeng/api";
import {Button} from "primeng/button";
import {Fieldset} from "primeng/fieldset";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {DatabaseBirchItems} from "../interface/database-birch-items";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "primeng/tabs";
import { InventorySearchComponent } from "../inventory-search/inventory-search.component";

@Component({
  selector: 'inventory-item',
  imports: [
    Splitter,
    PrimeTemplate,
    Button,
    FormsModule,
    ReactiveFormsModule,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    RouterLink,
    Fieldset,
    InputText,
    InventorySearchComponent
],
  templateUrl: './inventory-item.component.html',
  styleUrl: './inventory-item.component.css'
})
export class InventoryItemComponent {
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
    qtyShelf: 0,
    qtyTagged: 0,
    qtyLoose: 0,
  };
  tableHeaders: string[] = [];
  tableData: DatabaseBirchItems[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm => {
      this.itemCode = pm.get('item_name')
    });

  }

  productInfoFormSubmitted(form: NgForm) {
    console.log(form.value)
  }
}
