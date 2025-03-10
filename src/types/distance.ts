export enum DistanceUnit {
  KM = "KM",
  MI = "MI",
  BOTH = "BOTH",
}

export interface Distance {
  [DistanceUnit.KM]: number;
  [DistanceUnit.MI]: number;
}

export interface DistanceMetadata {
  coordinates: {
    lat: number;
    lon: number;
  };
  distance: Distance;
}
export interface DistanceResult {
  id: string;
  unit: DistanceUnit;
  address1: string;
  address2: string;
  metadata: DistanceMetadata;
}
export interface Pagination {
  offset: number;
  limit: number;
  order: string;
  orderBy: string;
  order2: string;
  orderBy2: string;
}

export interface HistoryRecord {
  pagination: Pagination;
  totalCount: number;
  results: DistanceResult[];
}
