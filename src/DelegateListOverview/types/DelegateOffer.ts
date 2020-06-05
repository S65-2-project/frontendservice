export interface User {
    id: string;
    name: string;
}

export interface apiHeaders {
    TotalCount: number | undefined;
    PageSize: number | undefined;
    CurrentPage: number;
    TotalPages: number;
    HasNext: boolean | undefined;
    HasPrevious: boolean | undefined;
}

export interface RequestDelegateOffersOptions {
    PageNumber: number;
    PageSize: number;
    MaxAvailableForInMonth: number | undefined;
    MinAvailableForInMonth: number | undefined;
    MinPrice: number | undefined;
    MaxPrice: number | undefined;
    RegionQuery: string;
    SearchQuery: string
}

export interface DelegateOffer {
    id: string;
    provider: User;
    title: string;
    description: string;
    liskPerMonth: number;
    region: string;
    availableForInMonths: number;
}