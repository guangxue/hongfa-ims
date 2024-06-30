import { Component, inject } from '@angular/core';
import { DropdownModule } from "primeng/dropdown";
import { FormsModule, NgForm } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";
import { TableModule } from "primeng/table";
import { Button, ButtonDirective } from "primeng/button";
import { TargetFileData } from "../interface/target-file-data";
import { MessagesModule } from "primeng/messages";
import { DataTableService } from "../service/data-table.service";
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

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
    TooltipModule,
    ConfirmPopupModule,
  ],
  templateUrl: './import-data.component.html',
  styleUrl: './import-data.component.css'
})

export class ImportDataComponent {
  dataTable = inject(DataTableService);
  targetFile: TargetFileData = { name: '',
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

  constructor() {
    this.dataTable.rows = 10;
  }

  onFileChange(e: Event) {
    // reset all data when input file changed
    this.targetFile.showDataTable = false;
    this.targetFile.errMsg = [];

    const target: HTMLInputElement = <HTMLInputElement>e.currentTarget;
    if(!("files" in target)) { return; }

    // found input file
    const inputfile: any = target.files?.item(0);
    const fsuffix: string = inputfile.name.split(".")[1];
    this.targetFile.name = inputfile.name;

    // file is not accpeted if file extension is not CSV format.
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

  toggleDataTable():void {
    this.targetFile.showDataTable = !this.targetFile.showDataTable;
  }

  importFormSubmitted(form: NgForm) {
    console.log("submitted value: ", form.value)
  }
}
