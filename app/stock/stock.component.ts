import {Component, inject} from '@angular/core';
import {AsyncPipe, NgClass, NgIf, NgTemplateOutlet} from "@angular/common";
import { SearchFormComponent } from "../search-form/search-form.component";
import { ButtonModule } from "primeng/button";
import { PrimeTemplate } from "primeng/api";
import {
  RouterLink,
  RouterOutlet,
  Router,
} from "@angular/router";
import { TableModule } from "primeng/table";
import { DatabaseBirchItems } from "../interface/database-birch-items";
import { SplitterModule } from "primeng/splitter";
import { ProductComponent } from "../product/product.component";
import { DbtableListComponent} from "../dbtable-list/dbtable-list.component";
import {StockService} from "../services/stock.service";

@Component({
  selector: 'stock',
  standalone: true,
  imports: [
    SearchFormComponent,
    ButtonModule,
    PrimeTemplate,
    RouterLink,
    TableModule,
    RouterOutlet,
    SplitterModule,
    ProductComponent,
    NgIf,
    NgTemplateOutlet,
    AsyncPipe,
    NgClass,
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
