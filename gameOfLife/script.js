function matrixGenerator(matrixSize, peopleCount, virusCount, antivirusCount, omnivorousCount, coronavirusCount) {
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



    return matrix;
}



let matrix = matrixGenerator(20, 15, 20, 25, 10, 15);
console.log(matrix);

var side = 35;

var peopleArr = []
var virusArr = []
var antivirusArr = []
var omnivorousArr = []
var coronavirusArr = []

function setup() {
    frameRate(10)
    createCanvas(matrix[0].length * side, matrix.length * side);

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
        }
    }



}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
            } else if (matrix[y][x] == 2) {
                fill("yellow")
            } else if (matrix[y][x] == 3) {
                fill("red")
            } else if (matrix[y][x] == 4) {
                fill("blue")
            } else if (matrix[y][x] == 5) {
                fill("black")
            } else {
                fill("gray")
            }
            rect(x * side, y * side, side, side)
        }
    }

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
}