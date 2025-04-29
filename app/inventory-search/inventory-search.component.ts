import { Component, inject } from '@angular/core';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { FormsModule, NgForm } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { Button } from 'primeng/button';
import { SearchItem } from '../interface/search-item';
import { BirchService } from '../services/birch.service';
import { InventorySearchTableComponent } from "../inventory-search-table/inventory-search-table.component";

@Component({
  selector: 'inventory-search',
  imports: [
    AutoComplete,
    FormsModule,
    InputText,
    Select,
    Button,
    InventorySearchTableComponent
],
  templateUrl: './inventory-search.component.html',
  styleUrl: './inventory-search.component.css',
})
export class InventorySearchComponent {
  birchService: BirchService = inject(BirchService);
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
  itemNameSuggestions: string[] = [];
  itemNameList: string[] = [];

  constructor() {
    this.birchService.getItemNameList().subscribe((data) => {
      this.itemNameList = data.map((item: any) => item.item_name);
    });
  }
  filterSuggestions($event: AutoCompleteCompleteEvent, formName: string) {
    let query = $event.query;
    if (formName == 'itemSearch') {
      this.itemNameSuggestions = this.itemNameList.filter((name: string) =>
        name.includes(query),
      );
    } else {
      this.itemNameSuggestions = [];
    }
  }

  formSubmission(form: NgForm) {
    this.searchItem = form.value;
  }
}
