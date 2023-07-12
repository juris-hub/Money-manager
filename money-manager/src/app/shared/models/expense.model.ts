export interface Expense {
  amount: number;
  account: string;
  categories: string;
  date: Date;
  comment: string;
  id?: string;
}
