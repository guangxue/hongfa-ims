import {Component} from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonDirective} from 'primeng/button';
import {ImportFileInfo} from '../interface/import-file-info';
import {Message} from 'primeng/message';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import {SelectModule} from 'primeng/select';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'import-data',
  imports: [
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonDirective,
    ConfirmPopupModule,
    IconFieldModule,
    InputIconModule,
    Message,
    SelectModule,
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
    header: [],
    cols: 0,
    selectedHeaders: {
      line: 'Line',
      item: 'Part Num,',
      desc: 'Description',
      qty: 'Supplier Quantity',
      unit: 'UOW'
    }
  };
  selectedDataType: string = 'Sales Order';
  dataTypeOptions: string[] = ['Sales Order', 'Purchase Order', 'Inventory'];
  selectedHeaders = {
    line: 'Line',
    item: 'Part Num,',
    desc: 'Description',
    qty: 'Supplier Quantity',
    unit: 'UOW'
  }

  constructor() {}


  async getLines(inputfile: any) {
    const blob = new Blob([inputfile], { type: 'text/csv' });
    let content = await blob.text();
    // Remove empty lines in case of causing `c.description` undefined.
    let lines = content.split('\r\n').filter((line) => line.length > 0);
    let contentLines = [];
    for (let line of lines) {
      contentLines.push(line.split(','));
    }
    // Remove table header
    this.targetFile.header = contentLines[0]
    this.targetFile.cols = contentLines[0].length
    return contentLines.slice(1);
  }

  async createLinesObject(inputfile: any) {
    const contentLines = await this.getLines(inputfile);
    return await this.normalizeLines(contentLines);
  }

  async getHeaderPos() {

    console.log(this.targetFile.header);
    let line = this.targetFile.header.findIndex(h=>h=="Line");
    let item = this.targetFile.header.findIndex(h=>h=="Part Num");
    let desc = this.targetFile.header.findIndex(h=>h=="Description");
    let qty = this.targetFile.header.findIndex(h=>(h=="Our Quantity" || h=='Supplier Quantity'));
    let unit = this.targetFile.header.findIndex(h=>h=="UOM");
    return {line, item, desc, qty, unit};
  }
  async normalizeLines(lines: string[][]) {
    const hp = await this.getHeaderPos()

    // Prepare line object for collection
    const collectLines: {
      line: string;
      item: string;
      description: string;
      qty: string;
      unit: string;
    }[] = [];

    lines.forEach((l) => {
      let line = {
        line: '',
        item: '',
        description: '',
        qty: '',
        unit: '',
      };

      line.line = l[hp.line];
      line.item = l[hp.item];
      if (l[hp.desc].startsWith('"') && l[hp.desc].endsWith('"')) {
        line.description = l[hp.desc].replace('""', '"').slice(1, -1);
      } else {
        line.description = l[hp.desc];
      }
      line.qty = l[hp.qty];
      line.unit = l[hp.unit];
      collectLines.push(line);
    });
    return collectLines;
  }



  createOrderNumber() {
    let birchOrderNumber = this.targetFile.name.split(' ').slice(-1)
    this.targetFile.orderNumber = `EB25-001-${birchOrderNumber}`;
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
    this.createOrderNumber();
    this.targetFile.linesObject = await this.createLinesObject(inputfile);
    console.log(this.targetFile.linesObject);
  }

  importFormSubmitted(event: Event) {
    event.preventDefault();
    console.log(this.selectedHeaders);
    // let orderInfo = {
    //   orderNumber: this.targetFile.orderNumber,
    //   orderItems: this.targetFile.linesObject,
    // }
    // this.localStorage.set('sales-order', JSON.stringify(orderInfo));
    // this.router
    //   .navigate([`/sales-order/${this.targetFile.orderNumber}`])
    //   .then((res) => {
    //     if (res) {
    //       return 'Navigated to sales-order';
    //     } else {
    //       return 'Failed to navigate to sales-order';
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  protected readonly SelectModule = SelectModule;
}
