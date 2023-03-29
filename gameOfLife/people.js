let LivingCreature = require('./LivingCreature')
module.exports = class People extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.multiply = 0; 


    }




    mul() {
        this.multiply++
        var emptyCell = this.chooseCell(0);
        var newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell && this.multiply >= 5) {

            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 1;

            var pe = new People(newX, newY);

            peopleArr.push(pe);

            this.multiply = 0;

        }
    }
}


