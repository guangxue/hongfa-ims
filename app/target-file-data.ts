import { Message } from "primeng/api";

export interface TargetFileData {
  name: string,
  totalRows: number,
  found: boolean,
  err: boolean,
  errMsg: Message[],
  showDataTable: boolean,
  dataFileRows: string[]
  dataFileTHeads: string[]
}
