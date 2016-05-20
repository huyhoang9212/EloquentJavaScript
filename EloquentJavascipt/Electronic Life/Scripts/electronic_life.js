// "#" represent walls and rocks
// "o" represent critters
var plan = ["############################",
            "#      #    #      o       ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

/*
 * Representing space
 */
function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function (other) {
    return new Vector(this.x + other.x, this.y + other.y);
}

/*
 * Grid is part of the world
 */
function Grid(width, height) {
    this.space = new Array(width * height);
    this.width = width;
    this.height = height;
}

Grid.prototype.isInside = function (vector) {
    return vector.x >= 0 && vector.x < this.width &&
        vector.y >= 0 && vector.y < this.height;
}

Grid.prototype.get = function (vector) {
    return this.space[vector.x + this.width * vector.y];
}

Grid.prototype.set = function (vector, value) {
    return this.space[vector.x + this.width * vector.y] = value;
}

var grid = new Grid(3, 3);
grid.set(new Vector(1, 1), 11);
console.log(grid);