export interface data {
  year: number;
  value: yearData[];

}


export type yearData = {
  id: string,
  title: string,
  value: number, 
  color: string,
}