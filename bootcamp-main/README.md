# bootcamp
Use Case Diagram

The text code is:
```
@startuml

title Deliveroo - Use Case Diagram

left to right direction

actor Customer
actor CustomerService
actor RestaurantWorker

rectangle System { 
Customer -> (Enter details)
Customer -> (Choose restaurant)
Customer -> (Choose menu items)
Customer -> (Place order)
Customer -> (Complaints)
(Complaints) -> CustomerService
(Place order) -> RestaurantWorker

}



@enduml

```
Second Text Code:
```
@startuml

title Deliveroo - Class Diagram


class Customer {
  new Account
  int orderID
  restaurantChosen()
  orderUpdate()
}

Account o-- Customer

class Account {
  string name
  string address
  string bankDetails
  
  getName()
  getAddress()
  getBankDetails()
}


class Driver {
new Account
string googleAPI
getOrderID()
getGoogleMapsAPI()
showDeliveryStatus()

}

Account o-- Driver


class Restaurant {
  new Account
  new Menu
  boolean approvedOrder
  receieveOrder()
  orderStatus()
  
}



Account o-- Restaurant


class Menu {
  string item
  string quantity
  string cost
  removeItem()
  addItem()
  calculateCost()
  
}

Menu o-- Restaurant
Menu "1" -up-> "1..*" Customer : Is viewed by

@enduml
```

And the third text code from the sequence diagram is:

```
@startuml

title "Deliveroo - Sequence Diagram for finding restaurants"

actor Customer

Customer -> App_UI : input address
App_UI -> App_API : isValidSyntax(address)
App_API -> Google_Maps_API : checkAddress(address)

Google_Maps_API -> App_API : validAddress


App_API -> Database : if (validAddress) findRestaurants
App_API -> App_UI : if (!validAddress) invalidAddress

Database -> App_API : restaurantsFound
App_API -> App_UI : restaurantsFound


database Database



App_UI --> Customer: display_restaurants
@enduml
```
