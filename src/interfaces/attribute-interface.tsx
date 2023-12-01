export interface AttributeInterface {
  name: string;
  value: string;
  images?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}
