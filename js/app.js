// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    constructor(x, y, speed) {
        this.x = x;  
        this.y = y;
        this.speed=speed
        this.sprite = 'images/enemy-bug.png';
    }
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    // this.sprite = 'images/enemy-bug.png';


    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x >= 505) {
        this.x = 0;
    }
    //check fo collision
    if (this.x < player.x + 50 && this.x + 60 > player.x && this.y < player.y + 40 && 40 + this.y > player.y) {
        
        //live--;
        player.reset();
        // reducelives();
     }
    };

    // Draw the enemy on the screen, required method for game
    render () {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x, y, image) {
        this.x = x;  
        this.y = y;
        this.sprite = image;
    }

    render(x, y) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        player.theEnd();
    };

    update(dt){
        if (this.x > 400) {
            this.x = 400;
        }
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.y > 400) {
            this.y = 400;
        }
        if (this.y < 0) {
            this.y = 0;
        }
    }

    handleInput(arr){
        if(arr==='right')
        {
            this.x +=101;
        }
        if(arr==="left")
        {
            this.x-=101;
        }
        if(arr==='up')
        {
            this.y-= 84;
        }
        if(arr==='down')
        {
            this.y+=84;
        }
    }
    reset()
    {
        this.x= 200;
        this.y=400;
    }

    theEnd() {
        if (player.y === 0) {
            player.reset();
            score++;
            
            scorediv.textContent = score;
        }
        gamewon();
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
player = new Player(200, 400, 'images/char-boy.png');
let score=0;
let scorediv= document.querySelector('.score')
let allEnemies= [];

function gamewon(){
    if (score===2)
    {
        alert("You Win the game");
        location.reload();
    }
}

allEnemies.push(new Enemy(0,150, Math.random()* 200+300),new Enemy(0,220, Math.random()* 100+300))

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
