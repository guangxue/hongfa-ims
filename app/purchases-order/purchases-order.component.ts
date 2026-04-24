import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { SplitterModule } from "primeng/splitter";

@Component({
    selector: 'purchases-order',
    imports: [
        TabsModule,
        SplitterModule
    ],
    templateUrl: './purchases-order.component.html',
    styleUrl: './purchases-order.component.css'
})
export class PurchasesOrderComponent {

    panelRatio: number[] = [];
}
