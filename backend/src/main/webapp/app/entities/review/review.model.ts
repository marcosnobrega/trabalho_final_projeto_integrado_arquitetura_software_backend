import { IProduct } from 'app/entities/product/product.model';

export interface IReview {
  id?: number;
  score?: number | null;
  comment?: string | null;
  product?: IProduct | null;
}

export class Review implements IReview {
  constructor(public id?: number, public score?: number | null, public comment?: string | null, public product?: IProduct | null) {}
}

export function getReviewIdentifier(review: IReview): number | undefined {
  return review.id;
}
