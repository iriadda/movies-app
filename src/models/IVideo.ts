export interface IVideo {
  id: string;
  iso_639_1: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

export interface IBaseVideo {
  id: number;
  results: IVideo[];
}