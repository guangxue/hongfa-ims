import {Component, inject} from '@angular/core';
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
import {DbtableListComponent} from "../dbtable-list/dbtable-list.component";
import {StockService} from "../services/stock.service";

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
    TableModule,
    DbtableListComponent
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
  stockService: StockService = inject(StockService);
  tableHeaders: string[] = [];
  tableData: DatabaseBirchItems[] = [];


  constructor(private route: ActivatedRoute, private routerItemService: RouterItemService) {

    this.route.paramMap.subscribe(pm => {
      this.itemCode = pm.get('code')
    });

    this.tableHeaders = this.stockService.tableHeaders();
    this.tableData = this.stockService.tableData();
  }

  productInfoFormSubmitted(form: NgForm) {
    console.log(form.value)
  }
}
