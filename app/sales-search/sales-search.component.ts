import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { DatePicker } from 'primeng/datepicker';
import { Select } from 'primeng/select';
import { SalesSearchTableComponent } from '../sales-search-table/sales-search-table.component';

@Component({
  selector: 'sales-search',
  imports: [
    FormsModule,
    InputText,
    DatePicker,
    Select,
    SalesSearchTableComponent,
  ],
  templateUrl: './sales-search.component.html',
  styleUrl: './sales-search.component.css',
})
export class SalesSearchComponent {
  salesSearch: any;
  salesStatusOptions: any[] | undefined;
}
