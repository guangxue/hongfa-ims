import { Component } from '@angular/core';
import {SplitterModule} from "primeng/splitter";
import {TabViewModule} from "primeng/tabview";

@Component({
    selector: 'purchases',
    imports: [
        SplitterModule,
        TabViewModule,
    ],
    templateUrl: './purchases.component.html',
    styleUrl: './purchases.component.css'
})
export class PurchasesComponent {

}
