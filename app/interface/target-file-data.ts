import { Message } from "primeng/api";

export interface TargetFileData {
  name: string,
  totalRows: number,
  found: boolean,
  /**
   * Target file not .csv format error.
   */
  err: boolean,
  errMsg: Message[],
  showDataTable: boolean,
  dataFileRows: string[]
  dataFileTHeads: string[]
}
