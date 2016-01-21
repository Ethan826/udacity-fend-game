/// <reference path="engine.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts"/>

// Enemies our player must avoid

// which way the enemy moves (i.e., to the right or to the left)

let SPEED_CONSTANT = 1;
let CANVAS_WIDTH = 505;
let CANVAS_HEIGHT = 606;
let COL_WIDTH = 101;
let ROW_HEIGHT = 83;

enum Directions {
    left,
    right
}

interface Position {
    x: number;
    y: number;
}

class Enemy {
    private sprite: string;
    private position: Position;
    private direction: Directions;
    private speed: number;

    constructor() {
        this.sprite = "images/enemy-bug.png";
        this.speed = this.makeSpeed();
        this.direction = this.makeDirection();
        this.position = this.makeInitialPosition(this.direction);
    }

    private makeSpeed(): number {
        return Math.random() * SPEED_CONSTANT;
    }

    private makeDirection(): Directions {
        if (Math.random() > 0.5) {
            return Directions.left;
        } else {
            return Directions.right;
        }
    }

    private makeInitialPosition(direction: Directions): Position {
        let pos: Position;
        if (direction === Directions.left) {
            pos.x = 0;
        } else {
            pos.x = CANVAS_WIDTH;
        }
        // Set correct y position.
        return pos;
    }

    update(dt: number): void {
        // Multiply dt and use to translate x and y coordinates.
    }

    render(dt: number, ctx: CanvasRenderingContext2D, resources: Resources) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        ctx.drawImage(resources.get(this.sprite), this.position.x, this.position.y);
    }
}

class Player {
    update() {

    }

    render() {

    }

    handleInput() {

    }
}

// Now instantiate your objects.
class Game {
    allEnemies: Enemy[];
    player: Player;
    eventListener: EventListener;

    private allowedKeys = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };

    constructor() {
        // initialize player and enemies
        $("document").keyup(function(e) {
            this.player.handleInput(this.allowedKeys[e.keyCode]);
        });
    }
}