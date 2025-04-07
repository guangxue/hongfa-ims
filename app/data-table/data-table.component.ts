import { Component } from '@angular/core';
import {TableModule} from "primeng/table";
import {NgForOf} from "@angular/common";
import {Select} from "primeng/select";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'data-table',
  imports: [
    TableModule,
    NgForOf,
    Select,
    FormsModule
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {

  tableHeaders = [
    "Item Code",
    "Shelf Zippers",
    "Box No.(Tagged)",
    "Tagged Zippers",
    "Box No.(Loose)",
    "Loose Zipers",
    "Tags left"
  ]

  products: any[] = [
    {
      id: 1,
      itemcode: '013810-284BEIGE',
      qtyShelf: '150',
      taggedBoxNum: [{name: '19A', val: 0}, {name: '142', val:1}, {name:'2B', val: 2}],
      qtyTagged: ['340', '300', '1200'],
      looseBoxNum: '1',
      qtyLoose: '300',
      tagsLeft: '300',
      selectedTBox: '',
    },
    {
      id: 2,
      itemcode: '013810-294MUSTAN',
      qtyShelf: '160',
      taggedBoxNum: [{name: '12T1', val: 0}],
      qtyTagged: ['320'],
      looseBoxNum: 'CTN30',
      qtyLoose: '360',
      tagsLeft: '300',
      selectedTBox: 0,
    },
    {
      id: 3,
      itemcode: '013810-318DRKBLU',
      qtyShelf: '100',
      taggedBoxNum: [{name: '9A', val: 0}, {name: '9B', val:1}, {name: '9C', val:2}],
      qtyTagged: ['380', '250', '3000'],
      looseBoxNum: '89',
      qtyLoose: '300',
      tagsLeft: '100',
      selectedTBox: 0,
    },
    {
      id: 4,
      itemcode: '013810-310BLACK',
      qtyShelf: '100',
      taggedBoxNum: [{name: '3', val: 0}],
      qtyTagged: ['310'],
      looseBoxNum: '28',
      qtyLoose: '300',
      tagsLeft: '300',
      selectedTBox: 0,
    },
  ]



}
