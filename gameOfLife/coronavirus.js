let LivingCreature = require('./LivingCreature')
module.exports = class Coronavirus extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 5;
        this.multiply = 0
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character)
    }

    mul() {
        this.multiply++;
        var emptyCell = this.chooseCell(0);
        var newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        // console.log(emptyCell);
        if (newCell && this.multiply >= 14) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            var coronavirus= new (newX, newY);
            coronavirusArr.push(coronavirus);
            this.multiply = 0;
        }
    }

    move() {
        this.energy--
        var emptyCell = this.chooseCell(0)
        var newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell && this.energy >= 0) {
            // console.log(newCell)
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }

    eat() {
        var emptyCell = this.chooseCell(2)
        var newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell) {
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in omnivorousArr) {
                if (newX == omnivorousArr[i].x && newY == omnivorousArr[i].y) {
                    omnivorousArr.splice(i, 1)
                    break
                }
            }
        }
        else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in coronavirusArr) {
            if (this.x == coronavirusArr[i].x && this.y ==  coronavirusArr[i].y) {
                coronavirusArr.splice(i, 1)

                break;
            }
        }
    }
}