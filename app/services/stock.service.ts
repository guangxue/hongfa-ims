import { Injectable } from '@angular/core';
import { DatabaseBirchItems } from "../interface/database-birch-items";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private stockDbTableHeaders: string[] = [
    "Item Code",
    "Shelf Zippers",
    "Box No.(Tagged)",
    "Tagged Zippers",
    "Box No.(Loose)",
    "Loose Zipers",
    "Tags left"
  ];

  constructor() {
  }

  tableHeaders(): string[] {
    return this.stockDbTableHeaders;
  }
  tableData(): DatabaseBirchItems[] {
    return [
      {
        itemcode: '013810-284BEIGE',
        qtyShelf: '150',
        taggedBoxNum: '19A, 142, 2B',
        qtyTagged: '340, 300, 1200',
        looseBoxNum: '1',
        qtyLoose: '300',
        tagsLeft: '300'
      },
      {
        itemcode: '013810-294MUSTAN',
        qtyShelf: '160',
        taggedBoxNum: '3',
        qtyTagged: '320',
        looseBoxNum: 'CTN30',
        qtyLoose: '360',
        tagsLeft: '300'
      },
      {
        itemcode: '013810-318DRKBLU',
        qtyShelf: '100',
        taggedBoxNum: '3, 128,101A',
        qtyTagged: '380, 250, 3000',
        looseBoxNum: '89',
        qtyLoose: '300',
        tagsLeft: '100'
      },
      {
      itemcode: '013810-310BLACK',
      qtyShelf: '100',
      taggedBoxNum: '30',
      qtyTagged: '310',
      looseBoxNum: '28',
      qtyLoose: '300',
      tagsLeft: '300'
  }
    ]
  }
}
