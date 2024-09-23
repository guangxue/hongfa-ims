import {Component } from '@angular/core';
import {AsyncPipe, NgClass, NgIf, NgTemplateOutlet} from "@angular/common";
import { SearchFormComponent } from "../search-form/search-form.component";
import { ButtonModule } from "primeng/button";
import { PrimeTemplate } from "primeng/api";
import {
  RouterLink,
  RouterOutlet,
  Router,
} from "@angular/router";
import { TableModule } from "primeng/table";
import { DatabaseBirchItems } from "../interface/database-birch-items";
import { SplitterModule } from "primeng/splitter";
import { ProductComponent } from "../product/product.component";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Component({
  selector: 'stock',
  standalone: true,
  imports: [
    SearchFormComponent,
    ButtonModule,
    PrimeTemplate,
    RouterLink,
    TableModule,
    RouterOutlet,
    SplitterModule,
    ProductComponent,
    NgIf,
    NgTemplateOutlet,
    AsyncPipe,
    NgClass
  ],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})

export class StockComponent {

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
  routerState = new BehaviorSubject<boolean>(false);
  routerItemActivated: boolean = false;
  cname: string = "hide";

  constructor(private router: Router){

  }

  activeRouterItem(itemcode: string) {

  }

}
