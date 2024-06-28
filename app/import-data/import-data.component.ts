import { Component } from '@angular/core';
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";
import { TableModule } from "primeng/table";
import { Button, ButtonDirective } from "primeng/button";
import { TargetFileData } from "../target-file-data";
import { MessagesModule } from "primeng/messages";

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
    ButtonDirective,
    MessagesModule,
  ],
  templateUrl: './import-data.component.html',
  styleUrl: './import-data.component.css'
})


export class ImportDataComponent {
  targetFile: TargetFileData = {
    name: '',
    totalRows: 0,
    found: false,
    err: false,
    errMsg: [],
    showDataTable: false,
    dataFileRows: [],
    dataFileTHeads: [],
  };
  selectedDataType: string = "Sales Order";
  dataTypeOptions: string[] = ['Purchase Order', 'Sales Order', 'Inventory', 'Product'];
  dataImported: boolean = false;
  first:number = 0;
  rows: number = 20;

  next() { this.first += this.rows }
  prev() { this.first -= this.rows }
  reset() { this.first = 0 }
  isFirstPage():boolean {
    return this.targetFile.dataFileRows ? this.first === 0 : true;
  }
  isLastPage():boolean {
    return this.targetFile.dataFileRows ? this.first === this.targetFile.dataFileRows.length - this.rows : true;
  }
  onFileChange(e: Event) {
    const target = <HTMLInputElement>e.currentTarget;
    console.log(target);
    if(!("files" in target)) { return; }

    const inputfile: any = target.files?.item(0);
    const fsuffix: string = inputfile.name.split(".")[1];
    console.log(fsuffix);

    this.targetFile.name = inputfile.name;
    if(fsuffix.toLowerCase() !== 'csv') {
      this.targetFile.found = false;
      this.targetFile.err = true;
      this.targetFile.errMsg = [{severity: "error", detail: "Invalid CSV format."}];
      return;
    }

    const reader = new FileReader();
    reader.readAsText(inputfile)
    reader.onload = () => {
      const dataRead = reader.result as string;
      const datalines: string[] = dataRead.split('\r\n');
      this.targetFile.dataFileRows = datalines.slice(1);
      this.targetFile.totalRows = this.targetFile.dataFileRows.length-1;
      this.targetFile.found = true;
      this.targetFile.dataFileTHeads = datalines[0].split(',');
    }
  }

  showTableButtonClicked() {
    if(this.targetFile.dataFileRows.length > 0) {
      this.targetFile.showDataTable = true;
    } else {
      this.targetFile.showDataTable = false;
    }
  }
}
