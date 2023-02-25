import axios, {AxiosResponse} from 'axios';
import { Country, PageInfo } from '../interfaces/AllCountries';
import { CountryInfo, PageInfoDetail } from '../interfaces/Country';

const instance = axios.create({
  baseURL: 'https://api.worldbank.org/v2/country',
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody)
};


export const Get={
  allCountries: (): Promise<[PageInfo, Country[]]> => requests.get('?format=json&region=EUU'),
  countryInfo: (id:string): Promise<[PageInfoDetail, CountryInfo[]]> => requests.get(id + '/indicator/SP.POP.TOTL?format=json')
}

