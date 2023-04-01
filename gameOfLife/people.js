let LivingCreature = require('./LivingCreature')
module.exports = class People extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.multiply = 0; 


    }

    mul() {
        this.multiply++;
        if(this.multiply >= 5) {
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
             if (weath == "winter") {
                this.energy -= 2;
                this.multiply -= 2;
            }
            if (weath == "spring") {
                this.energy += 5;
                this.multiply += 5;
            }
            if (weath == "summer") {
                this.energy += 3;
                this.multiply += 3;
            }
            if (weath == "autumn") {
                this.energy--;
                this.multiply--;
            }
    
        }

    }
}


