const express = require( "express" );
const path = require( "path" );

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//TODO add public folder middleware

// TODO chenge to sendfile Angel's index
app.get( "/", function( req, res ) {
    res.sendFile( path.join( __dirname, "index.html" ));
})

// TODO make reservations array

// TODO define response object


app.get( "/tables", function( req, res ) {
    req.sendFile( path.join( __dirname, "tables.html" ));
})

app.get( "/api/tables", function( req, res ) {
    return res.json( tables );
})

app.get( "/reserve", function( req, res ) {
    req.sendFile( path.join( __dirname, "reserve.html" ));
});

app.get( "/api/waitlist", function( req, res ) {
    return res.json( waitlist );
})


// TODO Post route add reservation


app.listen( PORT, function() {
    console.log( "Server is running!" );
})