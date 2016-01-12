/// <reference path="engine.ts"/>
// Enemies our player must avoid
var Enemy = (function () {
    function Enemy() {
        this.sprite = "images/enemy-bug.png";
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    Enemy.prototype.update = function (dt) {
    };
    Enemy.prototype.render = function (dt, ctx, resources) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        ctx.drawImage(resources.get(this.sprite), this.x, this.y);
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
        //initialize player and enemies
        document.addEventListener('keyup', function (e) {
            var allowedKeys = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down'
            };
            this.player.handleInput(allowedKeys[e.keyCode]);
        });
    }
    return Game;
})();
