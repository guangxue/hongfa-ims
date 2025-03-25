import { Component } from '@angular/core';
import {SplitterModule} from "primeng/splitter";
import {SearchFormComponent} from "../search-form/search-form.component";
import {TabViewModule} from "primeng/tabview";
import {PanelModule} from "primeng/panel";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'purchases',
    imports: [
        SplitterModule,
        SearchFormComponent,
        TabViewModule,
        RouterOutlet,
    ],
    templateUrl: './purchases.component.html',
    styleUrl: './purchases.component.css'
})
export class PurchasesComponent {

}
