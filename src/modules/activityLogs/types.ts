export interface IActivityLogYearMonthDoc {
  year: React.ReactNode;
  month: React.ReactNode;
}

export interface IActivityLogPerformerDetails {
  avatar: string;
  fullName: string;
  position: string;
}

export interface IActivityLogActionPerformer {
  _id: string;
  type: string;
  details: IActivityLogPerformerDetails;
}

export interface IActivityLog {
  _id: string;
  action: string;
  contentId: string;
  contentType: string;
  content: any;
  contentDetail: JSON;
  createdAt: Date;
  createdBy: JSON;
}

export interface IActivityLogsUser {
  date: IActivityLogYearMonthDoc;
  list: IActivityLog;
}

export interface IActivityLogYearMonth {
  year: number;
  month: number;
}

export interface IActivityLogForMonth {
  date: IActivityLogYearMonth;
  list: IActivityLog[];
}
