import { IUser } from 'app/entities/user/user.model';

export interface IAddress {
  id?: number;
  street?: string | null;
  number?: number | null;
  district?: string | null;
  city?: string | null;
  state?: string | null;
  zipcode?: string | null;
  user?: IUser | null;
}

export class Address implements IAddress {
  constructor(
    public id?: number,
    public street?: string | null,
    public number?: number | null,
    public district?: string | null,
    public city?: string | null,
    public state?: string | null,
    public zipcode?: string | null,
    public user?: IUser | null
  ) {}
}

export function getAddressIdentifier(address: IAddress): number | undefined {
  return address.id;
}
