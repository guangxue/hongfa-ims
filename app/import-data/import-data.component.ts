import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, NgForm } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonDirective } from 'primeng/button';
import { ImportFileInfo } from '../interface/import-file-info';
import { Message } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'import-data',
  imports: [
    DropdownModule,
    FormsModule,
    TableModule,
    ButtonDirective,
    TooltipModule,
    ConfirmPopupModule,
    IconFieldModule,
    InputIconModule,
    Message,
    Select,
    InputText,
  ],
  templateUrl: './import-data.component.html',
  styleUrl: './import-data.component.css',
})
export class ImportDataComponent {
  targetFile: ImportFileInfo = {
    name: '',
    found: false,
    err: false,
    errMsg: '',
    showTable: false,
    linesObject: [],
  };
  selectedDataType: string = 'Sales Order';
  dataTypeOptions: string[] = ['Sales Order', 'Purchase Order', 'Inventory'];
  importData = {
    orderno: '',
  };

  constructor() {}

  removeStringQuotes(str: string) {
    if (str.startsWith('"') && str.endsWith('"')) {
      return str.slice(1, -1);
    }
    return str;
  }
  async getLines(inputfile: any) {
    const blob = new Blob([inputfile], { type: 'text/csv' });
    const rawContent = await blob.text();
    return rawContent.split('\n');
  }

  async createLines(inputfile: any) {
    const lines = await this.getLines(inputfile);
    const collectLines: {
      line: string;
      item: string;
      description: string;
      qty: string;
      unit: string;
    }[] = [];

    lines.slice(1).forEach((l) => {
      let line = {
        line: '',
        item: '',
        description: '',
        qty: '',
        unit: '',
      };
      let readyline = l.split(',');
      line.line = readyline[0];
      line.item = readyline[2];
      line.description = this.removeStringQuotes(readyline[4]).replace(
        '""',
        '"',
      );
      line.qty = readyline[6];
      line.unit = readyline[7];
      collectLines.push(line);
    });
    return collectLines;
  }
  async onFileChange(e: Event) {
    // reset all data when input file changed
    this.targetFile.showTable = false;

    /**
     * Check if files in the event target object
     */
    const target: HTMLInputElement = <HTMLInputElement>e.currentTarget;
    if (!('files' in target)) {
      return;
    }

    // Get target file from FileList array
    const inputfile: any = target.files?.item(0);
    const extension: string = inputfile.name.split('.')[1];
    this.targetFile.name = inputfile.name;

    // Check if NOT CSV file and return.
    if (extension.toLowerCase() !== 'csv') {
      this.targetFile.found = false;
      this.targetFile.err = true;
      this.targetFile.errMsg = `"${this.targetFile.name}" is not a CSV file`;
      return;
    }

    this.targetFile.showTable = true;
    this.targetFile.found = true;
    this.targetFile.err = false;
    this.targetFile.errMsg = '';
    this.targetFile.linesObject = await this.createLines(inputfile);
  }

  importFormSubmitted(form: NgForm) {
    console.log('submitted value: ', form.value);
  }
}
