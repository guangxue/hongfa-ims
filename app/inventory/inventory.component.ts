import { Component } from '@angular/core';
import {SearchFormComponent} from "../search-form/search-form.component";
import {InventoryTableComponent} from "../inventory-table/inventory-table.component";

@Component({
  selector: 'inventory',
  imports: [
    SearchFormComponent,
    InventoryTableComponent
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

}
