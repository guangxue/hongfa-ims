import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';
import { BirchService } from '../services/birch.service';
import { SearchItem } from '../interface/search-item';
import {LocalStorageService} from "../services/local-storage.service";

@Component({
  selector: 'inventory-search-table',
  imports: [TableModule, RouterLink],
  templateUrl: './inventory-search-table.component.html',
  styleUrl: './inventory-search-table.component.css'
})
export class InventorySearchTableComponent implements OnChanges {
  localStorge = inject(LocalStorageService);
  currentStock: any[] = [];
  inventory: Array<any> = [];
  // Receiving value from a parent
  @Input() inputSearchItem: SearchItem = {
    itemName: '',
    description: '',
    category: '',
    status: '',
  };

  constructor() {
    let i = this.localStorge.get('inventory');
    if (i) {
      this.inventory = JSON.parse(i);
      this.currentStock = this.inventory;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    /**
     * `changes['inputSearchItem'].currentValue` is an object as the sample below:
     * {itemName: '', description: '', category: '', status: ''}
     */
    if (
      changes['inputSearchItem'] &&
      changes['inputSearchItem'].currentValue.itemName != ''
    ) {
      /**
       * SET `this.items` to update the inventory table
       * CHECK if the item.item_name contains the `inputSearchItem.itemName`
       */
      let searchResult = this.inventory.filter((item) => {
        return item.item_name
          .toLowerCase()
          .includes(
            changes['inputSearchItem'].currentValue.itemName.toLowerCase(),
          );
      });
      this.currentStock = searchResult.sort((a, b) => a.item_name.localeCompare(b.item_name));
    }
  }
}
