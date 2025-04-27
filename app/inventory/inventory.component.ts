import { Component } from '@angular/core';
import { InventorySearchComponent } from '../inventory-search/inventory-search.component';

@Component({
  selector: 'inventory',
  imports: [InventorySearchComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
})
export class InventoryComponent {}
