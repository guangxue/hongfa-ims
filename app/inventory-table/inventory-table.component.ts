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
  items: Array<any> = [];
  // Receiving value from a parent
  @Input() item: SearchItem = {
    itemName: '',
    description: '',
    category: '',
    status: '',
  };

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("[InventoryTableComponent] detected changes")
    if(changes['itemName']) {
      console.log(changes['itemName'].currentValue)
    }
  }

  ngOnInit(): void {
    this.birchService.getBirchItems().subscribe((data) => (this.items = data));
  }
  
}
