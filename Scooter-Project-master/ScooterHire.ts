import { resolve } from "path/posix";
import { BankDetails } from "./BankDetails";
import { Customer } from "./Customer";
import { CustomerService } from "./CustomerService";
import { GPSCoordinates } from "./GPSCoordinates";
import { Scooter } from "./Scooter";
import { Validator } from "./Validator";


export class ScooterHire {
    customer : Customer;
    scootersAvailable : Scooter[] = [];
    scooterChosen : Scooter;
    map : GPSCoordinates = new GPSCoordinates();
    scooterRiddenTime : number = 0;
    private areDetailsValidated : boolean = false

    constructor(customer : Customer) {
      this.customer = customer;
      this.map.mapCoordinates();
      this.scooterChosen = this.scootersAvailable[0] = new Scooter();
      for (let i=1;i<5;i++) {
        this.scootersAvailable[i] = new Scooter();
      }
    }

    isScooterAvailable() {
      return this.scootersAvailable.includes(this.scooterChosen);
    }

    retrieveScooterSuccessful() : boolean {
      if (this.scooterChosen.isFullyCharged() && this.customer.accountInfoValid() 
      && this.customer.bankDetailsAdded(this.customer.bankDetails) && this.isScooterAvailable()) {
        this.removeScooter(this.scooterChosen);
        this.areDetailsValidated = true;
        return true;
      } else {
        return false;
      }
    }

    private removeScooter(scooter : Scooter) {
       this.scootersAvailable = this.scootersAvailable.filter(val => val.QRCode !== this.scooterChosen.QRCode);
    }

      rideScooter() {
        if (this.areDetailsValidated) {
          console.log("Scooter is being ridden...");
          this.updateGPSPosition();
        } else {
          console.log("Sorry, cannot be riiden!");
        }
    }
    
     async chargeScooter() {
      if (this.areDetailsValidated) {
        console.log('Starting charge...');
        await new Promise(resolve => setTimeout(resolve, 500)); // wait 2 seconds
        console.log('Charge complete...');   
      } else {
        console.log("Retrieve a scooter!");
      }
   }

    private async updateGPSPosition() {
      this.scooterRiddenTime++;
      console.log(`Locating position with time interval : ${this.scooterRiddenTime}`);
      await new Promise(resolve => setTimeout(resolve, 500)); // wait 2 seconds
      if (this.isWithinRange()) {
        console.log("Great! Within range");
      } else {
        console.log("Warning! Bring your scooter within range!");
      }
      
      this.scooterRiddenTime === 5 ? this.chargeScooter() : this.updateGPSPosition();
    }
  
    private isWithinRange() : boolean {
      this.scooterChosen.scooterGPSPosition = this.map.mapAreaCoordinates[1];
      return this.map.mapAreaCoordinates.includes(this.scooterChosen.scooterGPSPosition);
    }

    returnScooterSuccessful() {
      this.scootersAvailable.push(this.scooterChosen);
      CustomerService.takePayment();
    }

}

// const customer = new Customer("Hamzah Gopaul", "gphz@gmail.com", 24, "GOPAU900145YAINN","xyz.png");
// customer.bankDetailsAdded(new BankDetails("Mr Gopaul","Nationwide","1234567812345678","123"));
// const scooterHire = new ScooterHire(customer);
// console.log(scooterHire);
// console.log(scooterHire.retrieveScooterSuccessful());

// scooterHire.retrieveScooterSuccessful();
// scooterHire.rideScooter();
// scooterHire.returnScooterSuccessful();


