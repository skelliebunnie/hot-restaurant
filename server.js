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

// TODO define response object
// 

// TODO Get route tables


// TODO Get route  Reserve


// TODO Get send json info


// TODO Post route add reservation


app.listen( PORT, function() {
    console.log( "Server is running!" );
})