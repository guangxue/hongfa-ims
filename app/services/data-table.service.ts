import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  public first: number = 0;
  private _rows: number = 0;

  /*
   * @params rows default value set to 20.
   */
  constructor() {}

  set rows(rows:number) {
    this._rows = rows
  }
  get rows(): number {
    if(!this._rows) { return 20 }
    return this._rows;
  }

  next() {
    this.first += this.rows;
  }
  prev() {
    this.first -= this.rows;
  }
  reset() { this.first = 0; }
  /*
   * @params totalRows: total rows of the input data file
   */
  isFirstPage(totalRows: number):boolean {
    return totalRows ? this.first === 0 : true;
  }

  /*
   * @params totalRows: total rows of the input data file
   */
  isLastPage(totalRows: number):boolean {
    return totalRows ? this.first === totalRows - this.rows : true;
  }
}
