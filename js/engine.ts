/// <reference path="app.ts" />
/// <reference path="resources.ts" />


/* Engine.js */

// Rewritten to avoid using globals.

class Engine {
    private resources: Resources;
    private ctx: CanvasRenderingContext2D;
    private game: Game;
    private doc: HTMLDocument;
    private win: Window;
    private canvas: HTMLCanvasElement;
    private lastTime: number;

    constructor() {
        this.game = new Game();
        this.resources.load([
            "images/stone-block.png",
            "images/water-block.png",
            "images/grass-block.png",
            "images/enemy-bug.png",
            "images/char-boy.png"]);
        this.canvas = this.doc.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = 505;
        this.canvas.height = 606;
        this.doc.body.appendChild(this.canvas);
        this.reset();
        this.lastTime = Date.now();
        this.resources.onReady(this.main());
    }

    main(): void {
        let now: number = Date.now();
        let dt = (now - this.lastTime) / 1000.0;
        this.update(dt);
        this.render();
    }

    update(dt: number) {
        this.updateEntities(dt);
        // checkCollisions();
    }

    updateEntities(dt: number) {
        this.game.allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        this.game.player.update();
    }

    render() {
        let rowImages = [
            "images/water-block.png",   // Top row is water
            "images/stone-block.png",   // Row 1 of 3 of stone
            "images/stone-block.png",   // Row 2 of 3 of stone
            "images/stone-block.png",   // Row 3 of 3 of stone
            "images/grass-block.png",   // Row 1 of 2 of grass
            "images/grass-block.png"    // Row 2 of 2 of grass
        ];
        let numRows = 6;
        let numCols = 5;

        /* Loop through the number of rows and columns we"ve defined above
         * and, using the rowImages array, draw the correct image for that
         * portion of the "grid"
         */
        for (let row = 0; row < numRows; ++row) {
            for (let col = 0; col < numCols; ++col) {
                /* The drawImage function of the canvas" context element
                 * requires 3 parameters: the image to draw, the x coordinate
                 * to start drawing and the y coordinate to start drawing.
                 * We're using our Resources helpers to refer to our images
                 * so that we get the benefits of caching these images, since
                 * we're using them over and over.
                 */
                this.ctx.drawImage(this.resources.get(rowImages[row]), col * 101, row * 83);
            }
        }

        this.renderEntities();
    }

    renderEntities() {
        /* Loop through all of the objects within the allEnemies array and call
         * the render function you have defined.
         */
        this.game.allEnemies.forEach(function(enemy) {
            enemy.render(this.dt, this.ctx, this.resources);
        });

        this.game.player.render();
    }

    reset() {
        return;
    }
}
