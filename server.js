const express = require( "express" );
const path = require( "path" );

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//TODO add public folder middleware

// TODO chenge to sendfile Angel's index
app.get( "/", function( req, res ) {
    res.end( "This is the restaurant page!" );
})

// TODO make reservations array
const reservationsList = [
    {
        id: "1",
        name: "John Doe",
        phoneNumber: "555-555-5555",
        email: "john@doe.com"
    },
    {
        id: "2",
        name: "John Doe",
        phoneNumber: "555-555-5555",
        email: "john@doe.com"
    },
    {
        id: "3",
        name: "John Doe",
        phoneNumber: "555-555-5555",
        email: "john@doe.com"
    },
    {
        id: "4",
        name: "John Doe",
        phoneNumber: "555-555-5555",
        email: "john@doe.com"
    },
    {
        id: "5",
        name: "John Doe",
        phoneNumber: "555-555-5555",
        email: "john@doe.com"
    }
];

const waitList = [
    
    {
        id: "6",
        name: "John Doe",
        phoneNumber: "555-555-5555",
        email: "john@doe.com"
    },
    {
        id: "7",
        name: "John Doe",
        phoneNumber: "555-555-5555",
        email: "john@doe.com"
    },
    {
        id: "8",
        name: "John Doe",
        phoneNumber: "555-555-5555",
        email: "john@doe.com"
    }
]

// TODO define response object
const responseReservations = {
    reservations: reservationsList
}

const responseWaitList = {
    reservations: waitList
}

// TODO Get route tables


// TODO Get route  Reserve


// TODO Get send json info


// TODO Post route add reservation


app.listen( PORT, function() {
    console.log( "Server is running!" );
})