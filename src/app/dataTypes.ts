export class Hotel {
  public id: number;
  public title: string;
  public address: string;
  public description: string;
  public phone: string;
  public picture: string;
  public photos: string[];
  public weather:  { [key: string]: number | string };
  public profile: { [key: string]: number | string };
  public stars: number;
}

export class IFilterType {
  public stars: string | number;
  public search: string;
}