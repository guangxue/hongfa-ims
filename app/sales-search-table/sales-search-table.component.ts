import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'sales-search-table',
  imports: [TableModule],
  templateUrl: './sales-search-table.component.html',
  styleUrl: './sales-search-table.component.css',
})
export class SalesSearchTableComponent {
  orders: any[] = [
    {
      no: 'EB25-003-135221',
      date: '01/Jan/2025',
      status: 'Shipped',
    },
    {
      no: 'EB25-017-135391',
      date: '01/May/2025',
      status: 'In Process',
    },
  ];
}
