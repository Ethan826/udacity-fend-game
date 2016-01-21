/// <reference path="engine.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts"/>
// Enemies our player must avoid
// which way the enemy moves (i.e., to the right or to the left)
var SPEED_CONSTANT = 1;
var CANVAS_WIDTH = 505;
var CANVAS_HEIGHT = 606;
var COL_WIDTH = 101;
var ROW_HEIGHT = 83;
var Directions;
(function (Directions) {
    Directions[Directions["left"] = 0] = "left";
    Directions[Directions["right"] = 1] = "right";
})(Directions || (Directions = {}));
var Enemy = (function () {
    function Enemy() {
        this.sprite = "images/enemy-bug.png";
        this.speed = this.makeSpeed();
        this.direction = this.makeDirection();
        this.position = this.makeInitialPosition(this.direction);
    }
    Enemy.prototype.makeSpeed = function () {
        return Math.random() * SPEED_CONSTANT;
    };
    Enemy.prototype.makeDirection = function () {
        if (Math.random() > 0.5) {
            return Directions.left;
        }
        else {
            return Directions.right;
        }
    };
    Enemy.prototype.makeInitialPosition = function (direction) {
        var pos;
        if (direction === Directions.left) {
            pos.x = 0;
        }
        else {
            pos.x = CANVAS_WIDTH;
        }
        // Set correct y position.
        return pos;
    };
    Enemy.prototype.update = function (dt) {
        // Multiply dt and use to translate x and y coordinates.
    };
    Enemy.prototype.render = function (dt, ctx, resources) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        ctx.drawImage(resources.get(this.sprite), this.position.x, this.position.y);
    };
    return Enemy;
})();
var Player = (function () {
    function Player() {
    }
    Player.prototype.update = function () {
    };
    Player.prototype.render = function () {
    };
    Player.prototype.handleInput = function () {
    };
    return Player;
})();
// Now instantiate your objects.
var Game = (function () {
    function Game() {
        this.allowedKeys = {
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        // initialize player and enemies
        $("document").keyup(function (e) {
            this.player.handleInput(this.allowedKeys[e.keyCode]);
        });
    }
    return Game;
})();
