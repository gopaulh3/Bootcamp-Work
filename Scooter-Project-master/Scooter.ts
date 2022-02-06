import { GPSCoordinates } from "./GPSCoordinates";

export class Scooter {
  batteryLife : number = 99;
  speedInMPH : number = 20;
  scooterGPSPosition : GPSCoordinates = new GPSCoordinates();
  QRCode : number = Math.floor(Math.random() * 10000000);

  isFullyCharged() : boolean {
    return this.batteryLife >= 99;
  }
}

