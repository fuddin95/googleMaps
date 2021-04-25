import faker from "faker";

export class Company {
  cName: string;
  message: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor(message: string) {
    this.message = message;
    this.cName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
