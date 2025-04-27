import { Component } from '@angular/core';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { FormsModule, NgForm } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { Button } from 'primeng/button';
import { SearchItem } from '../interface/search-item';
import { BirchService } from '../services/birch.service';
import { InventoryTableComponent } from '../inventory-table/inventory-table.component';

@Component({
  selector: 'inventory-search',
  imports: [
    AutoComplete,
    FormsModule,
    InputText,
    Select,
    Button,
    InventoryTableComponent,
  ],
  templateUrl: './inventory-search.component.html',
  styleUrl: './inventory-search.component.css',
})
export class InventorySearchComponent {
  searchItem: SearchItem = {
    itemName: '',
    description: '',
    category: '',
    status: 'active',
  };
  itemStatusOptions = [
    { name: 'Active', code: 'active' },
    { name: 'Inactive', code: 'inactive' },
    { name: 'Show All', code: 'all' },
  ];
  itemCategoryOptions = [
    { name: 'PC3', code: 'PC3' },
    { name: 'INV3', code: 'INV3' },
    { name: 'PO5', code: 'PO5' },
  ];

  constructor(private birchService: BirchService) {
    this.itemNameList = this.birchService.getItemNameList();
  }
  itemNameSuggestions: string[] = [];
  itemNameList: string[] = [];
  filterSuggestions($event: AutoCompleteCompleteEvent, formName: string) {
    let query = $event.query;
    if (formName == 'itemSearch') {
      this.itemNameSuggestions = this.itemNameList.filter((code) =>
        code.includes(query),
      );
    } else {
      this.itemNameSuggestions = [];
    }
  }
  whenSubmitted(event: Event, searchForm: NgForm) {
    event.preventDefault();
    console.log('form value:', this.searchItem);
    console.log('search item:', searchForm.value);
  }
}
