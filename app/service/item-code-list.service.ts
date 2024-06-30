import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemCodeListService {

  constructor() {
  }

  getItemCodeList() {
    return [
      {name: '013810-284BEIGE', code: 'PC3-10-284'},
      {name: '013810-294MUSTAN', code: 'PC3-10-294'},
      {name: '013810-310BLACK', code: 'PC3-10-310'},
      {name: '013810-318DRKBLU', code: 'PC3-10-318'},
      {name: '013812-101WHITE', code: 'PC3-12-101'},
      {name: '013812-102CREAM', code: 'PC3-12-102'},
      {name: '013812-103OFFWHI', code: 'PC3-12-103'},
      {name: '013812-107PRIMRO', code: 'PC3-12-107'},
      {name: '013812-110BUTTER', code: 'PC3-12-110'},
    ]
  }

  getItemCodeArrayList() {
    return [
      '013810-284BEIGE',
      '013810-294MUSTAN',
      '013810-310BLACK',
      '013810-318DRKBLU',
      '013812-101WHITE',
      '013812-102CREAM',
      '013812-103OFFWHI',
      '013812-107PRIMRO',
      '013812-110BUTTER',
    ];
  }
}
