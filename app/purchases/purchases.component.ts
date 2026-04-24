import { Component } from '@angular/core';
import { SplitterModule } from "primeng/splitter";
import { TabsModule } from 'primeng/tabs';

@Component({
    selector: 'purchases',
    imports: [
        SplitterModule,
        TabsModule,
    ],
    templateUrl: './purchases.component.html',
    styleUrl: './purchases.component.css'
})
export class PurchasesComponent {

}
