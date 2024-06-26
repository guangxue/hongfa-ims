import { Component } from '@angular/core';
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";
import { TableModule } from "primeng/table";
import { Button } from "primeng/button";

@Component({
  selector: 'import-data',
  standalone: true,
  imports: [
    DropdownModule,
    FormsModule,
    NgIf,
    TableModule,
    NgForOf,
    Button
  ],
  templateUrl: './import-data.component.html',
  styleUrl: './import-data.component.css'
})
export class ImportDataComponent {

  selectedDataType: string = "Sales Order";
  dataTypeOptions: string[] = [
    'Purchase Order', 'Sales Order', 'Inventory', 'Product'
  ];
  dataImported: boolean = false;
  parsedDataFile: string[] = [];
  tablerows: string[] = [];
  first:number = 0;
  rows: number = 10;

  next() { this.first + this.rows }
  prev() { this.first - this.rows }
  reset() { this.first = 0 }

  isFirstPage():boolean {
    return this.parsedDataFile ? this.first === 0 : true;
  }
  isLastPage() {}

  onFileChange(e: Event) {
    const target:HTMLInputElement = <HTMLInputElement>e.currentTarget;
    const inputfile = target.files?.item(0) as Blob;
    const reader = new FileReader();
    reader.readAsText(inputfile)
    reader.onload = (e) => {
      const data = reader.result as string;
      this.parsedDataFile = data.split('\r\n');
    }
  }
  onNextButtonClicked() {
    if(this.parsedDataFile.length > 0) {
      this.dataImported = true;
      this.tablerows = this.parsedDataFile.slice(1)
      console.log(this.parsedDataFile.slice(1))
    } else {
      this.dataImported = false;
    }
  }
}
