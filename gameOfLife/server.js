var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs")

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);


function matrixGenerator(matrixSize, peopleCount, virusCount, antivirusCount, omnivorousCount, coronavirusCount, atomicbombCount) {
    let matrix = [];

    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = []
        for (let j = 0; j < matrixSize; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let i = 0; i < peopleCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
        }

    }

    for (let i = 0; i < virusCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
        }

    }
    for (let i = 0; i < antivirusCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
        }

    }

    for (let i = 0; i < omnivorousCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
        }

    }


    for (let i = 0; i < coronavirusCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 5;
        }


    }

    for (let i = 0; i < atomicbombCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 6;
        }


    }


    io.emit("send matrix", matrix)
    return matrix;


}


matrix = matrixGenerator(20, 15, 20, 25, 10, 15);


peopleArr = []
virusArr = []
antivirusArr = []
omnivorousArr = []
coronavirusArr = []
atomicbombArr = []

weath = "winter"
People = require("./people")
Virus = require("./virus")
Antivirus = require("./antivirus")
Omnivorous = require("./omnivorous")
Coronavirus = require("./coronavirus");
Atomicbomb = require('./atomicbomb');


function createObj() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var people = new People(x, y)

                peopleArr.push(people)
            } else if (matrix[y][x] == 2) {
                var virus = new Virus(x, y)

                virusArr.push(virus)
            } else if (matrix[y][x] == 3) {
                var antivirus = new Antivirus(x, y)

                antivirusArr.push(antivirus)
            }

            else if (matrix[y][x] == 4) {
                var omnivorous = new Omnivorous(x, y)

                omnivorousArr.push(omnivorous)
            }

            else if (matrix[y][x] == 5) {
                var coronavirus = new Coronavirus(x, y)

                coronavirusArr.push(coronavirus)
            }
            else if (matrix[y][x] == 6) {
                var atomicbomb = new Atomicbomb(x, y)

                atomicbombArr.push(atomicbomb)
            }
        }
    }
    io.emit("send matrix", matrix)



}

createObj()

function gameMove() {
    for (var i in peopleArr) {
        peopleArr[i].mul()
    }

    for (let j in virusArr) {
        virusArr[j].mul()
        virusArr[j].eat()
    }

    for (let j in antivirusArr) {
        antivirusArr[j].mul()
        antivirusArr[j].eat()
    }

    for (let j in omnivorousArr) {
        omnivorousArr[j].mul()
        omnivorousArr[j].eat()
    }

    for (let j in coronavirusArr) {
        coronavirusArr[j].mul()
        coronavirusArr[j].eat()
    }

    for (let j in atomicbombArr) {
        atomicbombArr[j].mul()
        atomicbombArr[j].eat()
    }
    io.emit("send matrix", matrix)

}


setInterval(gameMove,666)


function kill() {
    PeopleArr = [];
    VirusArr = [];
    AntivirusArr = [];
    OumnivorousArr = [];
    CoronavirusArr = [];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
}


function addPeople() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
            var people = new People(x, y, 1)
            PeopleArr.push(people)
        }
    }
}
function addVirus() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
            VirusArr.push(new Virus(x, y, 2))
        }
    }
}


function addAntivirus() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
            AntivirusArr.push(new Antivirus(x, y, 3))
        }
    }
}
function addOmnivorous() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
            OumnivorousArr.push(new Oumnivorous(x, y, 4))
        }
    }
}
function addCoronavirus() {
    for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
            CoronavirusArr.push(new Coronavirus(x, y, 5))
        }
    }
}



function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
}
setInterval(weather, 5000);


////

io.on('connection', function (socket) {
    createObj();
    socket.on("kill", kill);
    socket.on("add people", addPeople);
    socket.on("add virus", addVirus);
    socket.on("add antivirus", addAntivirus);
    socket.on("add omnivorous", addOmnivorous);
    socket.on("add coronavirus", addCoronavirus);

});


var statistics = {};

setInterval(function () {
    statistics.people = peopleArr.length;
    statistics.virus = virusArr.length;
    statistics.antivirus = antivirusArr.length;
    statistics.omnivorous = omnivorousArr.length;
    statistics.coronavirus = coronavirusArr.length;

    fs.writeFile("statistics.json", JSON.stringify(statistics), function () {
        io.emit("data", statistics);
    })
}, 666)