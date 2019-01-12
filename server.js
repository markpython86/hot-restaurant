// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var reservations = [{
        name: "Andrew",
        phoneNumber: "555555555",
        email: "andrew@andrew.com",
        uniqueID: 1
    }, {
        name: "Mezan",
        phoneNumber: "555555555",
        email: "Mezan@mezan.com",
        uniqueID: 2
    },
    {
        name: "Mark",
        phoneNumber: "555555555",
        email: "mark@mark.com",
        uniqueID: 3
    }
];


app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, "home.html"))
});

app.get('/tables', function (request, response) {
    response.sendFile(path.join(__dirname, "tables.html"))
});

app.get('/reserve', function (request, response) {
    response.sendFile(path.join(__dirname, "reserve.html"))
});

app.get('/api/tables', function (request, response) {
    return response.json(reservations);
});

app.post("/api/tables", function (request, response) {
    var newRes = request.body;

    console.log(newRes);

    reservations.push(newRes);

    response.json(newRes);

})


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});