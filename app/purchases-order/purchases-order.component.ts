import { Component } from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {RouterOutlet} from "@angular/router";
import {SearchFormComponent} from "../search-form/search-form.component";
import {SplitterModule} from "primeng/splitter";

@Component({
  selector: 'purchases-order',
  standalone: true,
  imports: [
    TabViewModule,
    RouterOutlet,
    SearchFormComponent,
    SplitterModule
  ],
  templateUrl: './purchases-order.component.html',
  styleUrl: './purchases-order.component.css'
})
export class PurchasesOrderComponent {

  panelRatio: number[] = [];
}
