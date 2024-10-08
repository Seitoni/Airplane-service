var passengers = [{name: "Sabrina", paid: true, ticket: "firstclass"},
                  {name: "Coll", paid: true, ticket: "coach"},
                  {name: "Sasha", paid: true, ticket: "firstclass"},
                  {name: "Sam", paid: true, ticket: "coach"},
                  {name: "Din", paid: true, ticket: "coach"}]

function processServes () {
  for (var i = 0; i < passengers.length; i++) {
    servePassengers (passengers[i]);
  }
}

function drinkOrder (passenger) {
  var classConfirmation;
  if (passenger.ticket === "firstclass") {
    classConfirmation = function () {
      alert("Would you like coctail or wine?");
    };
  }
  else {
    classConfirmation = function () {
      alert ("Would you like cola or water?");
    };
  }
  return classConfirmation;
}

function servePassengers (passenger) {
  var getDrinkOrderFunction = drinkOrder(passenger);
  getDrinkOrderFunction();
  // Offer lunch
  getDrinkOrderFunction();
  // Offer wathing movie
  getDrinkOrderFunction();
  // Offer take of the trash
  getDrinkOrderFunction();
}

processServes();
