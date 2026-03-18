import { Product } from './constants';

export interface CartItem extends Product {
  quantity: number;
}

export type StoreState = {
  cart: CartItem[];
  isCartOpen: boolean;
  activeCategory: string;
};
