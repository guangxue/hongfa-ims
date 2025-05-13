export interface ImportFileInfo {
  /**
   * The name of target file
   */
  name: string;
  orderNumber: string;

  /**
   * Found the target file that matches .csv format.
   */
  found: boolean;
  /**
   * Target file not .csv format error.
   */
  err: boolean;

  /**
   * The error message that shows for primeNG message component
   */
  errMsg: string;

  /**
   * Whether shows data table on page or not.
   */
  showTable: boolean;

  header: string[];
  /**
   * The object format of the target file.
   * with some preset keys
   */
  linesObject: {
    line: string;
    item: string;
    description: string;
    qty: string;
    unit: string;
  }[];

  cols: number
}
