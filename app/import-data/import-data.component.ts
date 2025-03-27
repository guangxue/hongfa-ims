import { Component, inject } from '@angular/core';
import { DropdownModule } from "primeng/dropdown";
import { FormsModule, NgForm } from "@angular/forms";
import { NgIf } from "@angular/common";
import { TableModule } from "primeng/table";
import { Button, ButtonDirective } from "primeng/button";
import { TargetFileData } from "../interface/target-file-data";
import { Message } from "primeng/message";
import { DataTableService } from "../services/data-table.service";
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";

@Component({
    selector: 'import-data',
  imports: [
    DropdownModule,
    FormsModule,
    NgIf,
    TableModule,
    Button,
    ButtonDirective,
    TooltipModule,
    ConfirmPopupModule,
    IconFieldModule,
    InputIconModule,
    Message,
  ],
    templateUrl: './import-data.component.html',
    styleUrl: './import-data.component.css'
})

export class ImportDataComponent {
  dataTable = inject(DataTableService);
  fileChanged: boolean = false;
  targetFile: TargetFileData = { name: '',
    totalRows: 0,
    found: false,
    err: false,
    errMsg: "",
    showDataTable: false,
    data: [],
    dataRows: [],
    dataHeader: [],
  };
  selectedDataType: string = "Sales Order";
  dataTypeOptions: string[] = ['Purchase Order', 'Sales Order', 'Inventory', 'Product'];

  constructor() {
    this.dataTable.rows = 6;
  }
  readCSVFile(inputfile:any) {
    const reader = new FileReader();
    reader.readAsText(inputfile)
    reader.onload = () => {
      const dataRead = reader.result as string;
      const dataLines: string[] = dataRead.split('\r\n').filter(x => x !== '');
      this.targetFile.data = dataLines;
      this.targetFile.dataRows = dataLines.slice(1);
      this.targetFile.dataHeader = dataLines[0].split(',');
      this.targetFile.totalRows = dataLines.length-1;
      this.targetFile.found = true;
    }
  }

  onFileChange(e: Event) {
    this.fileChanged = true;
    // reset all data when input file changed
    this.targetFile.showDataTable = false;


    const target: HTMLInputElement = <HTMLInputElement>e.currentTarget;
    if(!("files" in target)) { return; }

    // found input file
    const inputfile: any = target.files?.item(0);
    const fsuffix: string = inputfile.name.split(".")[1];
    this.targetFile.name = inputfile.name;

    // Check if CSV file.
    if(fsuffix.toLowerCase() !== 'csv') {
      this.targetFile.found = false;
      this.targetFile.err = true;
      this.targetFile.errMsg = `"${this.targetFile.name}" is not a CSV file`;
      this.targetFile.dataRows = [];
      this.targetFile.totalRows = 0;
      return;
    } else {
      this.targetFile.showDataTable = true;
      this.targetFile.found = true;
      this.targetFile.err = false;
      this.targetFile.errMsg = "";
      this.readCSVFile(inputfile);
      return;
    }
  }

  importFormSubmitted(form: NgForm) {
    console.log("submitted value: ", form.value)
  }

  protected readonly HTMLInputElement = HTMLInputElement;
}
