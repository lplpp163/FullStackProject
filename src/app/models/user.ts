export class User {
  isAdmin: boolean;
  name: string;
  cart: {[k: string]: any};
  orders: {[k: string]: any};
  male: boolean;
  address: string;
  zip: string;
  city: string;
  country: string;
}
