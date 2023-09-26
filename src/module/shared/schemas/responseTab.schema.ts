export interface ResponseTab<T> {
  data: T;
  info: Info;
}

export interface Info {
  key: string;
  order: string;
  page: number;
  total: number;
}
