const { resolveSoa } = require("dns");
const express = require( "express" );
const path = require( "path" );
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use( express.static( "public" ))

// TODO chenge to sendfile Angel's index
app.get( "/", function( req, res ) {
    res.sendFile( path.join( __dirname, "index.html" ));
})

// TODO make reservations array
let masterList = [
    {
        id: "1",
        name: "Marcia Wright",
        phoneNumber: "708-826-7233",
        email: "MarciaSWright@dayrep.com"
    },
    {
        id: "2",
        name: "Frank Kent",
        phoneNumber: "706-213-7290",
        email: "FrankCKent@armyspy.com"
    },
    {
        id: "3",
        name: "Theresa Gregory",
        phoneNumber: "239-949-7510",
        email: "TheresaDGregory.jourrapide.com"
    },
    {
        id: "4",
        name: "Salvador McGarvey",
        phoneNumber: "919-310-7440",
        email: "SalvadorRMcGarvey@jourrapide.com"
    },
    {
        id: "5",
        name: "Nancy Wong",
        phoneNumber: "816-803-8645",
        email: "NancyLWong@dayrep.com"
    },
    {
        id: "6",
        name: "Eddie Washington",
        phoneNumber: "316-617-0354",
        email: "EddieGWashington@rhyta.com"
    },
    {
        id: "7",
        name: "Denise Schaefer",
        phoneNumber: "316-436-4793",
        email: "DeniseRSchaefer@jourrapide.com"
    },
    {
        id: "8",
        name: "Teddy Hollingsworth",
        phoneNumber: "803-880-2391",
        email: "TeddyMHollingsworth@teleworm.us"
    }
];

let reservationsList = masterList.slice(0,5);
let waitList = masterList.slice(5, masterList.length);

app.get( "/tables", function( req, res ) {
    res.sendFile( path.join( __dirname, "tables.html" ));
});

app.get( "/reserve", function( req, res ) {
    res.sendFile( path.join( __dirname, "reserve.html" ));
});

app.get( "/api/tables", function( req, res ) {
    // return res.json( reservationsList );
    return res.json( masterList );
});

// Post route add reservation
app.post("/api/addReservation", function(req, res){
    console.log(req.body);
    const reservation = req.body;

    reservation.id = reservationsList.length + waitList.length;
    masterList.push(reservation);

    res.status(200).json(reservation);
});

// Delete route remove reservation
app.delete("/api/deleteReservation/:id", function(req, res){

  for(var i in masterList) {
    if(masterList[i].id === req.params.id) {
      masterList.splice(i, 1);
    }
  }

  return res.status(200).json( masterList );
});

app.listen( PORT, function() {
    console.log( "Server is running!" );
})