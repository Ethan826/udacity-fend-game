/// <reference path="engine.ts"/>

// Enemies our player must avoid

class Enemy {
    sprite: string;
    x: number;
    y: number;

    constructor() {
        this.sprite = "images/enemy-bug.png";
    }

    update(dt: number): void {
        // Multiply td and use to translate x and y coordinates.
    }

    render(dt: number, ctx: CanvasRenderingContext2D, resources: Resources) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        ctx.drawImage(resources.get(this.sprite), this.x, this.y);
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

    constructor() {
        //initialize player and enemies
        document.addEventListener('keyup', function(e) {
            let allowedKeys = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down'
            };
            this.player.handleInput(allowedKeys[e.keyCode]);
        });
    }
}


