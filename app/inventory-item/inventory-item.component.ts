import {Component, inject} from '@angular/core';
import {Splitter} from "primeng/splitter";
import {PrimeTemplate} from "primeng/api";
import {SearchFormComponent} from "../search-form/search-form.component";
import {InventoryTableComponent} from "../inventory-table/inventory-table.component";
import {Button} from "primeng/button";
import {Fieldset} from "primeng/fieldset";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {StockService} from "../services/stock.service";
import {DatabaseBirchItems} from "../interface/database-birch-items";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {RouterItemService} from "../services/router-item.service";
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "primeng/tabs";

@Component({
  selector: 'inventory-item',
  imports: [
    Splitter,
    PrimeTemplate,
    SearchFormComponent,
    InventoryTableComponent,
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
  stockService: StockService = inject(StockService);
  tableHeaders: string[] = [];
  tableData: DatabaseBirchItems[] = [];

  constructor(private route: ActivatedRoute, private routerItemService: RouterItemService) {
    this.route.paramMap.subscribe(pm => {
      this.itemCode = pm.get('item_name')
    });

    this.tableHeaders = this.stockService.tableHeaders();
    this.tableData = this.stockService.tableData();
  }

  productInfoFormSubmitted(form: NgForm) {
    console.log(form.value)
  }
}
