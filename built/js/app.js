/// <reference path="engine.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts"/>
// Enemies our player must avoid
var Enemy = (function () {
    function Enemy() {
        this.sprite = "images/enemy-bug.png";
    }
    Enemy.prototype.update = function (dt) {
        // Multiply td and use to translate x and y coordinates.
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
        this.allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };
        //initialize player and enemies
        $("document").keyup(function (e) {
            this.player.handleInput(this.allowedKeys[e.keyCode]);
        });
    }
    return Game;
})();
