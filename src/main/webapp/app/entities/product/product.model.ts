import { IUser } from 'app/entities/user/user.model';
import { IOrder } from 'app/entities/order/order.model';
import { IReview } from 'app/entities/review/review.model';

export interface IProduct {
  id?: number;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  stock?: number | null;
  image?: string | null;
  producer?: IUser | null;
  orders?: IOrder[] | null;
  reviews?: IReview[] | null;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public name?: string | null,
    public description?: string | null,
    public price?: number | null,
    public stock?: number | null,
    public image?: string | null,
    public producer?: IUser | null,
    public orders?: IOrder[] | null,
    public reviews?: IReview[] | null
  ) {}
}

export function getProductIdentifier(product: IProduct): number | undefined {
  return product.id;
}
