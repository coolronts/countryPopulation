export interface Country {
    id:          string;
    iso2Code:    string;
    name:        string;
    region:      Region;
    adminregion: Region;
    incomeLevel: Region;
    lendingType: Region;
    capitalCity: string;
    longitude:   number;
    latitude:    number;
}

export interface Region {
    id:       ID;
    iso2code: Iso2Code;
    value:    Value;
}

export enum ID {
    Eca = "ECA",
    Ecs = "ECS",
    Empty = "",
    Hic = "HIC",
    Ibd = "IBD",
    Lnx = "LNX",
    Mea = "MEA",
    Umc = "UMC",
}

export enum Iso2Code {
    Empty = "",
    The7E = "7E",
    Xd = "XD",
    Xf = "XF",
    Xt = "XT",
    Xx = "XX",
    Z7 = "Z7",
    Zq = "ZQ",
}

export enum Value {
    Empty = "",
    EuropeCentralAsia = "Europe & Central Asia",
    EuropeCentralAsiaExcludingHighIncome = "Europe & Central Asia (excluding high income)",
    HighIncome = "High income",
    Ibrd = "IBRD",
    MiddleEastNorthAfrica = "Middle East & North Africa",
    NotClassified = "Not classified",
    UpperMiddleIncome = "Upper middle income",
}

export interface PageInfo {
    page:     number;
    pages:    number;
    per_page: string;
    total:    number;
}

