import { ImageInterface } from "./image-interface";

export interface ItemInterface {
  name: string;
  value?: string;
  href?: string;
  images?: ImageInterface[];
}
