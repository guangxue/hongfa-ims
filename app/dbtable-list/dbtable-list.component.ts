import {Component, Input} from '@angular/core';
import {Button} from "primeng/button";
import {PrimeTemplate} from "primeng/api";
import {RouterLink} from "@angular/router";
import {TableModule} from "primeng/table";
import {DatabaseBirchItems} from "../interface/database-birch-items";
import {KeyValuePipe} from "@angular/common";

@Component({
  selector: 'dbtable-list',
  standalone: true,
  imports: [
    Button,
    PrimeTemplate,
    RouterLink,
    TableModule,
    KeyValuePipe
  ],
  templateUrl: './dbtable-list.component.html',
  styleUrl: './dbtable-list.component.css'
})
export class DbtableListComponent {
  @Input() tableData: DatabaseBirchItems[] = [];
  @Input() tableHeaders: string[] = [];
  @Input() tableRouterLink: string = "";

  keepOrder() {
    return 0;
  }
}
