import { Component } from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {SplitterModule} from "primeng/splitter";

@Component({
    selector: 'purchases-order',
    imports: [
        TabViewModule,
        SplitterModule
    ],
    templateUrl: './purchases-order.component.html',
    styleUrl: './purchases-order.component.css'
})
export class PurchasesOrderComponent {

  panelRatio: number[] = [];
}
