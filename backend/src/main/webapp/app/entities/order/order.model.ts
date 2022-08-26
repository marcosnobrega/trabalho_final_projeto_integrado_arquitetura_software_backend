import dayjs from 'dayjs/esm';
import { IProduct } from 'app/entities/product/product.model';

export interface IOrder {
  id?: number;
  date?: dayjs.Dayjs | null;
  amount?: number | null;
  products?: IProduct[] | null;
}

export class Order implements IOrder {
  constructor(public id?: number, public date?: dayjs.Dayjs | null, public amount?: number | null, public products?: IProduct[] | null) {}
}

export function getOrderIdentifier(order: IOrder): number | undefined {
  return order.id;
}
