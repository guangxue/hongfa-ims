import { Component } from '@angular/core';
import {SplitterModule} from "primeng/splitter";
import {SearchFormComponent} from "../search-form/search-form.component";
import {TabViewModule} from "primeng/tabview";

@Component({
    selector: 'purchases',
    imports: [
        SplitterModule,
        SearchFormComponent,
        TabViewModule,
    ],
    templateUrl: './purchases.component.html',
    styleUrl: './purchases.component.css'
})
export class PurchasesComponent {

}
