import {
  BLOOM,
  COLOR,
  FLOWER_TYPE,
  FRAGRANCE,
  OCCASIONS,
  SIZE,
} from "./flower.constant";

export type TFlower = {
  name: string;
  price: number;
  quantity: number;
  type: typeof FLOWER_TYPE;
  color: typeof COLOR;
  bloom: typeof BLOOM;
  size: typeof SIZE;
  fragrance: typeof FRAGRANCE;
  occasions: typeof OCCASIONS;
};
