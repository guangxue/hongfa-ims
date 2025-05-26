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
import {Divider} from "primeng/divider";
import {LocalStorageService} from "../services/local-storage.service";
import {Router} from "@angular/router";

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
    Divider,
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
    objectLines: [],
    header: [],
    contentLines: []
  };
  selectedDataType: string = 'Sales Order';
  dataTypeOptions: string[] = ['Sales Order', 'Purchase Order', 'Inventory'];
  selectedHeaders = {
    //line: null,
    item: null,
    desc: null,
    qty: null,
    unit: null
  }
  initialHeaders = {
    //line: 'Line',
    item: 'Part Num',
    desc: 'Description',
    qty: 'Supplier Quantity',
    unit: 'UOM'
  }

  constructor(private localStorage: LocalStorageService, private router: Router) {}

  // helper functions
  filterObject(obj: any, func: Function) {
    const objectArray = Object.entries(obj);
    const filteredObject = objectArray.filter(([key, value]) => func(key, value));
    return Object.fromEntries(filteredObject);
  }
  createOrderNumber() {
    let birchOrderNumber = this.targetFile.name.split(' ').slice(-1)
    this.targetFile.orderNumber = `EB25-001-${birchOrderNumber}`;
  }

  headerPosition(preset: boolean = true) {
    let pos = {
      // line: this.targetFile.header.findIndex(h => h == 'Line'),
      item: this.targetFile.header.findIndex(h => h == 'Part Num'),
      desc: this.targetFile.header.findIndex(h => h == 'Description'),
      qty : this.targetFile.header.findIndex(h => h == 'Supplier Quantity'),
      unit: this.targetFile.header.findIndex(h => h == 'UOM')
    }
    if(preset) {
      return pos
    } else {
      let filteredObject = this.filterObject(this.selectedHeaders, (_key: any, value: null) => value !== null);
      for (let key in filteredObject) {
        filteredObject[key] = this.targetFile.header.findIndex(h => h == filteredObject[key]);
      }
      console.log("filteredObject",filteredObject)
      pos = Object.assign(pos, filteredObject)
      return pos
    }
  }

  async readLines(inputfile: any) {
    const blob = new Blob([inputfile], {type: 'text/csv'});
    const content = await blob.text();
    let lines = content.split('\r\n').filter((line) => line.length > 0);
    let contentLines: string[][] = [];
    for (let line_1 of lines) {
      contentLines.push(line_1.split(','));
    }
    // Remove table header
    this.targetFile.header = contentLines[0];
    return contentLines.slice(1);
  }


  createObjectLines(lines: string[][], pos: any) {
    // Prepare line object for collection
    const collectedObjectLines: { item: string; desc: string; qty: string; unit: string}[] = [];

    lines.forEach((l) => {
      let line = { item: '', desc: '', qty: '', unit: '',};

      line.item = l[pos.item];

      if (l[pos.desc].startsWith('"') && l[pos.desc].endsWith('"')) {
        line.desc = l[pos.desc].replace('""', '"').slice(1, -1);
      } else {
        line.desc = l[pos.desc];
      }
      line.qty = l[pos.qty];
      line.unit = l[pos.unit];
      collectedObjectLines.push(line);
    });
    return collectedObjectLines;
  }


  onFileChange(e: Event) {
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
    this.readLines(inputfile).then((lines) => {
      this.targetFile.contentLines = lines;
    });
    this.createOrderNumber();
  }

  importFormSubmitted(event: Event) {
    event.preventDefault();
    let selectedHeadersChanged = Object.values(this.selectedHeaders).some(v => v !== null);
    let pos: {}
    if(selectedHeadersChanged) {
      pos = this.headerPosition(false);
    } else {
      pos = this.headerPosition(true);
    }
    this.targetFile.objectLines = this.createObjectLines(this.targetFile.contentLines, pos);

    this.localStorage.set('order-number', JSON.stringify(this.targetFile.orderNumber));
    this.localStorage.set('order-data', JSON.stringify(this.targetFile.objectLines));
    this.router
      .navigate([`/sales-order/${this.targetFile.orderNumber}`])
      .then((res: any) => {
        if (res) {
          return 'Navigated to sales-order';
        } else {
          return 'Failed to navigate to sales-order';
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
