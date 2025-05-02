import {Component} from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from '@angular/common';
import {TableModule} from 'primeng/table';
import {ButtonDirective} from 'primeng/button';
import {TargetFileData} from '../interface/target-file-data';
import {Message} from 'primeng/message';
import {TooltipModule} from 'primeng/tooltip';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import {Select} from 'primeng/select';

@Component({
  selector: 'import-data',
  imports: [
    DropdownModule,
    FormsModule,
    NgIf,
    TableModule,
    ButtonDirective,
    TooltipModule,
    ConfirmPopupModule,
    IconFieldModule,
    InputIconModule,
    Message,
    Select,
  ],
  templateUrl: './import-data.component.html',
  styleUrl: './import-data.component.css',
})
export class ImportDataComponent {
  fileChanged: boolean = false;
  targetFile: TargetFileData = {
    name: '',
    totalRows: 0,
    found: false,
    err: false,
    errMsg: '',
    showDataTable: false,
    data: [],
    dataRows: [],
    dataObject: [],
    dataHeader: []
  };
  selectedDataType: string = 'Sales Order';
  dataTypeOptions: string[] = [
    'Purchase Order',
    'Sales Order',
    'Inventory',
    'Product',
  ];

  constructor() {}

  readCSVFile(inputfile: any) {
    const reader = new FileReader();
    reader.readAsText(inputfile);
    reader.onload = () => {
      const dataRead = reader.result as string;
      const dataLines: string[] = dataRead
        .split('\r\n')
        .filter((x) => x !== '');
      /**
       * Sample data read from CSV file
       * Array[0]: "Line,Type,Part Num,Rev,Description,Qty Option,Our Quantity,UOM,Supplier Quantity,UOM,Unit Price,Document Extended Cost,Customer"
       * Array[1]: "1,PUR-STK,011253,,BAG SUIT PREMIUM 60 X 98CM BLACK,Our,100,EA,100,EA,2.1,210,Birch Creative"
       * Array[...]
       */
      this.targetFile.data = dataLines;
      this.targetFile.dataRows = dataLines.slice(1);
      this.targetFile.dataHeader = dataLines[0].split(',');
      this.targetFile.totalRows = dataLines.length - 1;
      this.targetFile.found = true;
    };
  }

  async getFileLines(inputfile: any) {
    const blob = new Blob([inputfile], { type: 'text/csv' });
    const rawContent =  await blob.text()
    return rawContent.split('\r\n').filter((x) => x !== '');
  }
  onFileChange(e: Event) {
    this.fileChanged = true;
    // reset all data when input file changed
    this.targetFile.showDataTable = false;

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

    // Check if CSV file.
    if (extension.toLowerCase() !== 'csv') {
      this.targetFile.found = false;
      this.targetFile.err = true;
      this.targetFile.errMsg = `"${this.targetFile.name}" is not a CSV file`;
      this.targetFile.dataRows = [];
      this.targetFile.totalRows = 0;
      return;
    }

    this.targetFile.showDataTable = true;
    this.targetFile.found = true;
    this.targetFile.err = false;
    this.targetFile.errMsg = '';
    this.getFileLines(inputfile).then(lines=>{

      this.targetFile.totalRows = lines.length-1
      lines.slice(1).forEach(line => {
        let lineObj = {
          line: '',
          itemName: '',
          description: '',
          unit: '',
          qty: '',
        }
        lineObj.line = line.split(',')[0]
        lineObj.itemName = line.split(',')[2]
        lineObj.description = line.split(',')[4]
        lineObj.unit = line.split(',')[7]
        lineObj.qty = line.split(',')[8]
        this.targetFile.dataObject.push(lineObj);
      })
    });
    console.log("Databojc")
    console.log(this.targetFile.dataObject)
  }

  importFormSubmitted(form: NgForm) {
    console.log('submitted value: ', form.value);
  }
}
