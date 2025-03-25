import {Component, inject} from '@angular/core';
import { SearchFormComponent } from "../search-form/search-form.component";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { DatabaseBirchItems } from "../interface/database-birch-items";
import { SplitterModule } from "primeng/splitter";
import { DbtableListComponent} from "../dbtable-list/dbtable-list.component";
import {StockService} from "../services/stock.service";

@Component({
    selector: 'stock',
    imports: [
        SearchFormComponent,
        ButtonModule,
        TableModule,
        SplitterModule,
        DbtableListComponent
    ],
    templateUrl: './stock.component.html',
    styleUrl: './stock.component.css'
})

export class StockComponent {

  private stockService: StockService = inject(StockService);

  tableHeaders: string[] = [];
  tableData: DatabaseBirchItems[] = [];

  constructor(){
    this.tableHeaders = this.stockService.tableHeaders();
    this.tableData = this.stockService.tableData();

  }

}
