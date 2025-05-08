import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, NgForm} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonDirective} from 'primeng/button';
import {ImportFileInfo} from '../interface/import-file-info';
import {Message} from 'primeng/message';
import {TooltipModule} from 'primeng/tooltip';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import {Select} from 'primeng/select';
import {InputText} from 'primeng/inputtext';
import {Router} from "@angular/router";
import {isPlatformBrowser} from "@angular/common";

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
    orderNumber: '',
    found: false,
    err: false,
    errMsg: '',
    showTable: false,
    linesObject: [],
  };
  selectedDataType: string = 'Sales Order';
  dataTypeOptions: string[] = ['Sales Order', 'Purchase Order', 'Inventory'];
  importData: {
    orderNumber: string
    orderData: any[]
  } = {
    orderNumber: '',
    orderData: []
  };

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {

  }

  async getLines(inputfile: any) {
    const blob = new Blob([inputfile], { type: 'text/csv' });
    let content = await blob.text()
    // Remove empty lines in case of causing `c.description` undefined.
    let lines = content.split('\n').filter(line => line.length > 0);
    let contentLines = []
    for (let line of lines) {
      contentLines.push(line.split(','))
    }
    // Remove table header
    return contentLines.slice(1);
  }

  async normalizeLines(lines: string[][]) {
    const POS: {line: number, item: number, desc: number, qty: number, unit: number}= {
      line: 0,
      item: 2,
      desc: 4,
      qty:  6,
      unit:  7,
    }
    const collectLines: {
      line: string;
      item: string;
      description: string;
      qty: string;
      unit: string;
    }[] = []

    lines.forEach(l=> {
      let line = {
        line: '',
        item: '',
        description: '',
        qty: '',
        unit: '',
      };

      line.line = l[POS.line];
      line.item = l[POS.item];
      if (l[POS.desc].startsWith('"') && l[POS.desc].endsWith('"')) {
        line.description = l[POS.desc].replace('""', '"').slice(1, -1);
      }else {
        line.description = l[POS.desc];
      }
      line.qty = l[POS.qty];
      line.unit = l[POS.unit];
      collectLines.push(line);
    })
    return collectLines;
  }
  async createLinesObject(inputfile: any) {
    const contentLines = await this.getLines(inputfile);
    return await this.normalizeLines(contentLines)
  }
  createOrderNumber() {
    console.log('createOrderNumber');
    let birchOrderNumber = this.targetFile.name.split(' ')[1]
    this.targetFile.orderNumber = `EB25-088-${birchOrderNumber}`
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
    this.targetFile.name = inputfile.name.split('.')[0];

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
    this.targetFile.linesObject = await this.createLinesObject(inputfile);
    this.createOrderNumber();
  }

  importFormSubmitted(form: NgForm) {

    console.log("Import form");
    this.importData.orderData = this.targetFile.linesObject
    this.importData.orderNumber = this.targetFile.orderNumber
    if(isPlatformBrowser(this.platformId)) {
      localStorage.setItem('importData', JSON.stringify(this.importData));
      this.router.navigate([`/sales-order/${this.importData.orderNumber}`]);
    }
  }
}
