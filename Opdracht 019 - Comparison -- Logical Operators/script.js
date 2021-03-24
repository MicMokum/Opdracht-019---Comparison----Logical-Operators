const age = 27;
const isFemale = true;
const driverStatus = "bob";  // is dat dan niet bobette? 
const isDrunk = true;
const name = "Piet"
const totalAmount = 121.50

// voor de deur

if (age => 18) {
    console.log("Je bent oud genoeg.");
    if (isFemale) {
        console.log("Kom binnen schatje.");
    } else {
        console.log("Dat wordt dokken ouwe.");
    }
} else {
    console.log("De speeltuin is verderop.");
}

// eenmaal binnen

if (age >= 18 && age <= 25) {  //jonger dan 18 mag toch niet naar binnen? 
    console.log("Je hebt geluk, je krijgt kinderkorting.");
} else {
    console.log("Volle prijs voor jou!");
}

if (name == "Sarah" || name == "Bram") {
    console.log("Hier, een biertje van het huis.")
} else {
    console.log("Bier kost doekoe.")
}

if (totalAmount >= 100) {
    console.log("Champagne!")
} else if (totalAmount >= 50) {
    console.log("Nachos!")
} else if (totalAmount >= 25) {
    console.log("Bitternballen!")
} else {
    console.log("Hier is uw bestelling. Wist u van onze acties. Bij bestelling van...")
}

// later op de avond

if (driverStatus == "bob") {
    if (isDrunk) {
        console.log("Zal ik maar een taxi voor je bellen?");
    } else {
        console.log("Rijd voorzichtig.");
    }
} else {
    console.log("Waar is je bob?");
}

if (isFemale){
    if (isDrunk) {
        if (age >=21 && age <=35) {
            console.log("Je mag ook met mij mee. ;)");
        }
    }
} 
