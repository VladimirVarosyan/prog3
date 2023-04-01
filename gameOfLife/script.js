const socket = io()
var side = 35;
function setup() {
    frameRate(10)
    createCanvas(30 * side, 30 * side);
}
function showStats(data){
    const peopleCount = document.getElementById("peopleCount")
    peopleCount.innerHTML = "People count:" + data.people
    const virusCount = document.getElementById("virusCount")
    virusCount.innerHTML = "virus count:" + data.virus
    const antivirusCount = document.getElementById("antivirusCount")
    antivirusCount.innerHTML = "antivirus count:" + data.antivirus
    const omnivorousCount = document.getElementById("omnivorousCount")
    omnivorousCount.innerHTML = "omnivorous count:" + data.omnivorous
    const coronavirusCount = document.getElementById("coronavirusCount")
    coronavirusCount.innerHTML = "coronavirus count:" + data.coronavirus
}


function updatecolor(matrix) {
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
                fill("pink")
            }   else if (matrix[y][x] == 6) {
                    fill("black")
            } else {
                fill("gray")
            }
            rect(x * side, y * side, side, side)
        }
    }

    
}


socket.on("send matrix",updatecolor)
socket.on("data", showStats)