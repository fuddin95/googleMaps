import faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable, Checker {
  name: string;
  age: number = 10;
  message: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor(message: string) {
    this.message = message;
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
//you can have multiple interfaces
interface Checker {
  age: number;
}
