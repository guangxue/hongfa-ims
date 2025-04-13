import { Component } from '@angular/core';
import { TableModule } from "primeng/table";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'inventory-table',
  imports: [
    TableModule,
    RouterLink
  ],
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.css'
})
export class InventoryTableComponent {

  products: any[] = [
    {
      item_name: '013810-284BEIGE',
      qty_shelf: 180,
      qty_tagged: '1200',
      qty_loose: '300',
      tags_left: '300'
    },
    {
      item_name: '013810-284BEIGE',
      qty_shelf: 150,
      qty_tagged: '800',
      qty_loose: '300',
      tags_left: '300'
    },
    {
      item_name: '013810-294MUSTAN',
      qty_shelf: 200,
      qty_tagged: '750',
      qty_loose: '300',
      tags_left: '300'
    },
    {
      item_name: '013810-318DRKBLU',
      qty_shelf: 300,
      qty_tagged: '700',
      qty_loose: '300',
      tags_left: '300'
    },
    {
      item_name: '013810-310BLACK',
      qty_shelf: 750,
      qty_tagged: '800',
      qty_loose: '300',
      tags_left: '300'
    }
  ];
}
