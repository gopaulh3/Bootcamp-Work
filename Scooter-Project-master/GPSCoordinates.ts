export class GPSCoordinates {
  longitude: Number = Math.random()*10;
  latitude: Number = Math.random()*10;
  mapAreaCoordinates : GPSCoordinates[] = [];

  getCoordinates() {
    this.longitude = Math.random()*10;
    this.latitude = Math.random()*10;
  }

  mapCoordinates() : GPSCoordinates[] {
    for (let i=0;i<5;i++) {
      this.mapAreaCoordinates[i] = new GPSCoordinates();
    }
    return this.mapAreaCoordinates;
  }
}


