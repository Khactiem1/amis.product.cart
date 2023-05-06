import { Product } from "../inventory/product";
import { CurrentUser } from "../services-system/current_user";

export class Cart extends CurrentUser {
  public cartDetail: CartDetail [] = [];
}

export class CartDetail extends Product {
  public cartDetailID: string = '';
  public currentUser: string = '';
  public quantity: number = 1;
}