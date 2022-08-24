export interface IUser {
  id?: number;
  login?: string;
  firstName?: string;
}

export class User implements IUser {
  constructor(public id: number, public login: string, public firstName: string) {}
}

export function getUserIdentifier(user: IUser): number | undefined {
  return user.id;
}
