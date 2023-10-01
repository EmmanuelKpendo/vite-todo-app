
export enum Status {
    All = "all",
    Active = "active",
    Completed = "completed",
  }
  
  export interface TodoInfo {
    id: string;
    title: string;
    status: Status;
  }