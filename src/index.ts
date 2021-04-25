//npm i faker
//parcel index.html
//npm i @types/googlemaps

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const userFahad = new User("This is the user Fahad");
console.log(userFahad);

const nestle = new Company("This is a nestle company");
console.log(nestle);

const myMap = new CustomMap("map");

myMap.addMarker(userFahad);
myMap.addMarker(nestle);
myMap.addMarker(new Company("This is where P&G is located"));
