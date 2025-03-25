import {Message} from "primeng/message";

export interface TargetFileData {
  /**
   * The name of target file
   */
  name: string,

  /**
   * The total number of lines excluded header.
   */
  totalRows: number,

  /**
   * Found the target file that matches .csv format.
   */
  found: boolean,
  /**
   * Target file not .csv format error.
   */
  err: boolean,

  /**
   * The error message that shows for primeNG message component
   */
  errMsg: Message[],

  /**
   * Whether shows data table on page or not.
   */
  showDataTable: boolean,

  /**
   * All data for target file.
   */
  data: string[],

  /**
   * The total rows excludes header.
   */
  dataRows: string[]

  /**
   * The header of the target file.
   */
  dataHeader: string[]
}
