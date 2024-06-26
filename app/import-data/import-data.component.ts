import { Component } from '@angular/core';
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";
import { TableModule } from "primeng/table";
import { Button, ButtonDirective } from "primeng/button";

@Component({
  selector: 'import-data',
  standalone: true,
  imports: [
    DropdownModule,
    FormsModule,
    NgIf,
    TableModule,
    NgForOf,
    Button,
    ButtonDirective
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
  dataFileRows: string[] = [];
  dataFileTHeads: string[] = [];
  first:number = 0;
  rows: number = 20;

  next() { this.first += this.rows }
  prev() { this.first -= this.rows }
  reset() { this.first = 0 }

  isFirstPage():boolean {
    return this.dataFileRows ? this.first === 0 : true;
  }
  isLastPage():boolean {
    return this.dataFileRows ? this.first === this.dataFileRows.length - this.rows : true;
  }

  onFileChange(e: Event) {
    const target:HTMLInputElement = <HTMLInputElement>e.currentTarget;
    const inputfile = target.files?.item(0) as Blob;
    const reader = new FileReader();
    reader.readAsText(inputfile)
    reader.onload = () => {
      const dataRead = reader.result as string;
      const datalines: string[] = dataRead.split('\r\n');
      this.dataFileRows = datalines.slice(1);
      this.dataFileTHeads = datalines[0].split(',');
    }
  }

  showTableButtonClicked() {
    if(this.dataFileRows.length > 0) {
      console.log("total lines are ", this.dataFileRows.length-1)
      this.dataImported = true;
    } else {
      this.dataImported = false;
    }
  }
}
