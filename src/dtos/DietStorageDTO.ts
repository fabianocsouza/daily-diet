export type DietStorageDTO = {
  name: string;
  description: string;
  date: string;
  time: string;
  status: boolean;
}
export type DailyStorageDTO = {
  title: string;
  data: DietStorageDTO[];
}
