import {
  Component,
  effect,
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

@Component({
  selector: 'inventory-table',
  imports: [TableModule, RouterLink],
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.css',
})
export class InventoryTableComponent implements OnInit, OnChanges {
  private birchService = inject(BirchService);
  itemsCopy: Array<any> = [];
  items: Array<any> = [];
  // Receiving value from a parent
  @Input() inputSearchItem: SearchItem = {
    itemName: '',
    description: '',
    category: '',
    status: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.birchService.getBirchItems().subscribe((data) => {
      this.itemsCopy = data;
      this.items = data;
    });
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
      this.items = this.itemsCopy.filter((item) => {
        return item.item_name
          .toLowerCase()
          .includes(
            changes['inputSearchItem'].currentValue.itemName.toLowerCase(),
          );
      });
    }
  }
}
