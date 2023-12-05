import { ImageInterface } from "./image-interface";

export interface AttributeInterface {
  name: string;
  value?: string;
  href?: string;
  images?: ImageInterface[];
}
