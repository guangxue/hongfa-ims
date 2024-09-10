import { Component } from '@angular/core';
import {SplitterModule} from "primeng/splitter";
import {SearchFormComponent} from "../search-form/search-form.component";

@Component({
  selector: 'purchases',
  standalone: true,
  imports: [
    SplitterModule,
    SearchFormComponent
  ],
  templateUrl: './purchases.component.html',
  styleUrl: './purchases.component.css'
})
export class PurchasesComponent {

}
