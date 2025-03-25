import { Component } from '@angular/core';
import { SearchFormComponent } from "../search-form/search-form.component";

@Component({
    selector: 'sales',
    imports: [
        SearchFormComponent
    ],
    templateUrl: './sales.component.html',
    styleUrl: './sales.component.css'
})
export class SalesComponent {

}
