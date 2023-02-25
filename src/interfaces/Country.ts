export interface CountryInfo {
    indicator:       Country;
    country:         Country;
    countryiso3code: Countryiso3Code;
    date:            string;
    value:           number;
    unit:            string;
    obs_status:      string;
    decimal:         number;
}

export interface Country {
    id:    ID;
    value: Value;
}

export enum ID {
    At = "AT",
    SPPopTotl = "SP.POP.TOTL",
}

export enum Value {
    Austria = "Austria",
    PopulationTotal = "Population, total",
}

export enum Countryiso3Code {
    Aut = "AUT",
}

export interface PageInfoDetail {
    page:        number;
    pages:       number;
    per_page:    number;
    total:       number;
    sourceid:    string;
    sourcename:  string;
    lastupdated: string;
}
