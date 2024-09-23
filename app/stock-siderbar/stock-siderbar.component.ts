import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {PrimeTemplate} from "primeng/api";
import {RouterLink} from "@angular/router";
import {SearchFormComponent} from "../search-form/search-form.component";
import {TableModule} from "primeng/table";
import {DatabaseBirchItems} from "../interface/database-birch-items";

@Component({
  selector: 'stock-siderbar',
  standalone: true,
    imports: [
        Button,
        PrimeTemplate,
        RouterLink,
        SearchFormComponent,
        TableModule
    ],
  templateUrl: './stock-siderbar.component.html',
  styleUrl: './stock-siderbar.component.css'
})
export class StockSiderbarComponent {

  DBirchItems: DatabaseBirchItems[] = [
    {
      itemcode: '013810-284BEIGE',
      qtyShelf: '100',
      taggedBoxNum: '3',
      qtyTagged: '300',
      looseBoxNum: '8',
      qtyLoose: '300',
      tagsLeft: '300'
    },
    {
      itemcode: '013810-294MUSTAN',
      qtyShelf: '100',
      taggedBoxNum: '3',
      qtyTagged: '300',
      looseBoxNum: '8',
      qtyLoose: '300',
      tagsLeft: '300'
    },
    {
      itemcode: '013810-310BLACK',
      qtyShelf: '100',
      taggedBoxNum: '3',
      qtyTagged: '300',
      looseBoxNum: '8',
      qtyLoose: '300',
      tagsLeft: '300'
    },
    {
      itemcode: '013810-318DRKBLU',
      qtyShelf: '100',
      taggedBoxNum: '3',
      qtyTagged: '300',
      looseBoxNum: '8',
      qtyLoose: '300',
      tagsLeft: '300'
    },
  ]
}
