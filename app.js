let starting, destination;

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDL50nVv09WdGDqPygFgcaV_66j4q159ZI",
    authDomain: "cbwh-ab6d5.firebaseapp.com",
    databaseURL: "https://cbwh-ab6d5-default-rtdb.firebaseio.com",
    projectId: "cbwh-ab6d5",
    storageBucket: "cbwh-ab6d5.appspot.com",
    messagingSenderId: "586373767716",
    appId: "1:586373767716:web:542a4b4754ea628f0ceeb1",
    measurementId: "G-V3TBG9NQ7R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Class to store full bus data
class Bus {
    constructor(routeNo, busNo, depot, route, serviceType, currentStop, nextStop, occupancy, status) {
        this.routeNo = routeNo;
        this.busNo = busNo;
        this.depot = depot;
        this.route = route;
        this.serviceType = serviceType;
        this.currentStop = currentStop;
        this.nextStop = nextStop;
        this.occupancy = occupancy;
        this.status = status;
    }
}

// Store all buses
const buses = {};

// Listen to Realtime Database
db.ref('/').on('value', snapshot => {
    const data = snapshot.val();
    getId('busList').innerHTML = ""; // Clear list before updating

    for (let key in data) {
        const b = data[key];

        // Create Bus instance
        let bus = new Bus(
            b.routeNo || "",
            b.busNo || key,
            b.depot || "",
            b.route || "",
            b.serviceType || "",
            b.currentStop || "",
            b.nextStop || "",
            b.occupancy || "",
            b.status || ""
        );

        // Store for later use
        buses[key] = bus;

        // Create <li> element
        let li = document.createElement('li');
        li.setAttribute("onclick", "openFormUP(this)");
        li.setAttribute("id", key);
        li.innerHTML = `
            <div class="left">
                <p>${bus.routeNo}</p>
            </div>
            <div class="right">
                <p>${bus.serviceType}</p>
                <p>${bus.busNo} - ${bus.depot}</p>
            </div>
        `;

        // Append to list
        getId('busList').appendChild(li);
    }
});

function openFormUP(ref) {
    let key = ref.id;

    let routeNo = getId('routeNo');
    let busNo = getId('busNo');
    let depot = getId('depot');
    let route = getId('route');
    let serviceType = getId('serviceType');
    let currentStop = getId('currentStop');
    let nextStop = getId('nextStop');
    let occupancy = getId('occupancy');
    let status = getId('status');

    getId('form').classList.remove('hide');

    routeNo.value = buses[key].routeNo;
    busNo.value = buses[key].busNo;
    depot.value = buses[key].depot;
    route.value = buses[key].route;
    serviceType.value = buses[key].serviceType;
    currentStop.value = buses[key].currentStop;
    nextStop.value = buses[key].nextStop;
    occupancy.value = buses[key].occupancy;
    status.value = buses[key].status;

    getId('add_UPD_Btn').innerHTML = "UPDATE";

}

function addBusData() {
    let routeNo = getId('routeNo').value;
    let busNo = getId('busNo').value;
    let depot = getId('depot').value;
    let route = getId('route').value;
    let serviceType = getId('serviceType').value;
    let currentStop = getId('currentStop').value;
    let nextStop = getId('nextStop').value;
    let occupancy = getId('occupancy').value;
    let status = getId('status').value;

    let busData = {
        routeNo,
        depot,
        route,
        serviceType,
        currentStop,
        nextStop,
        occupancy,
        status
    };

    const db = firebase.database();
    const key = `${busNo}`; // Use bus number as key
    db.ref(key).set(busData)
        .then(() => {
            getId('form').classList.add('hide');
            if (getId('add_UPD_Btn').innerHTML == "UPDATE") {
                alert("Bus data Updated successfully!");
            } else {
                alert("Bus data added successfully!");
            }
        })
        .catch((error) => {
            console.error("Error adding bus data:", error);
        });

}

function deleteBus() {
    const db = firebase.database();
    let key = getId('busNo').value;

    db.ref(key).remove()
        .then(() => {
            if (buses.hasOwnProperty(key)) {
                delete buses[key];
            }
            alert(`Bus ${key} deleted successfully from database.`);
            getId('form').classList.add('hide');
        })
        .catch((error) => {
            console.error("Error deleting bus:", error);
            alert("Failed to delete bus. Check console for details.");
        });
}

function openForm() {
    getId('form').classList.remove('hide');
    getId('add_UPD_Btn').innerHTML = "ADD";

    // Reset all Input Fields
    document.querySelectorAll('.info input').forEach(input => input.value = '');

    getId('routeNo').focus();

}

function autoFillOnRoute(ref) {
    starting = setRoute(ref.value)[0];
    destination = setRoute(ref.value)[1];
    if (starting != undefined && destination != undefined) {
        getId('route').value = starting + " - " + destination;
    }

}

function swapRoute() {
    let route = getId('route').value;
    if (route == destination + " - " + starting) {
        getId('route').value = starting + " - " + destination;
    } else {
        getId('route').value = destination + " - " + starting;
    }
}

function fillDepot(ref) {
    let depotLocal = busDataLocal[1][busDataLocal[0].indexOf(ref.value)]
    let serviceTypeLocal = busDataLocal[2][busDataLocal[0].indexOf(ref.value)]

    if (serviceTypeLocal != undefined) {
        switch (serviceTypeLocal) {
            case "CO":
                serviceTypeLocal = "City Ordinary";
                break;
            case "ME":
                serviceTypeLocal = "Metro Express";
                break;
            case "MD":
                serviceTypeLocal = "Metro Deluxe";
                break;
            case "ECO":
                serviceTypeLocal = "E-City Ordinary";
                break;
            case "EME":
                serviceTypeLocal = "E-Metro Express";
                break;
            case "EML":
                serviceTypeLocal = "E-Metro Luxury (AC)";
                break;

            default:
                break;
        }
    }

    if (depotLocal != undefined && serviceTypeLocal != undefined) {
        getId('depot').value = depotLocal;
        getId('serviceType').value = serviceTypeLocal;
    }
}

function getId(element) {
    return document.getElementById(element);
}

function capitalizeWords(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


