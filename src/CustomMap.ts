import { User } from "./User";

export class CustomMap {
  //so that no one outside the class can access it and modify it
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  //  { location: { lat: number; lng: number } } inline type

  addMarker(user: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: user.message,
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}

//*********** Interface *****************/
export interface Mappable {
  message: string;
  location: {
    lat: number;
    lng: number;
  };
}
