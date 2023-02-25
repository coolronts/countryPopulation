import {CountryInfo} from '../interfaces/Country'

export function random_rgba(id: string) : string {
  const hash = id.split('').reduce((acc, val) => ((acc << 5) - acc) + val.charCodeAt(0), 0);
  const index = hash % 28;
  const colors = [
    'rgb(255, 102, 102)', 'rgb(255, 178, 102)', 'rgb(155, 25, 102)', 'rgb(18, 15, 182)', 
    'rgb(102, 255, 102)', 'rgb(102, 255, 178)', 'rgb(102, 255, 255)', 'rgb(102, 178, 255)', 
    'rgb(102, 102, 255)', 'rgb(178, 102, 255)', 'rgb(255, 102, 255)', 'rgb(255, 102, 178)',
    'rgb(255, 51, 51)', 'rgb(255, 153, 51)', 'rgb(255, 255, 51)', 'rgb(153, 255, 51)', 
    'rgb(51, 25, 51)', 'rgb(51, 255, 153)', 'rgb(51, 255, 255)', 'rgb(51, 153, 255)', 
    'rgb(51, 51, 255)', 'rgb(153, 51, 255)', 'rgb(25, 5, 125)', 'rgb(255, 51, 153)',
    'rgb(255, 153, 153)', 'rgb(255, 204, 153)', 'rgb(255, 255, 153)', 'rgb(204, 255, 153)'
  ];
  return colors[index]; 
}



export const getSortedYear = (data: CountryInfo[]) : number[] => { 
  const years: number[] = []
  data.map((country: CountryInfo) => years.push(Number(country.date)))
  const sortedYears = years.sort((a, b) => a - b)
  return sortedYears
}