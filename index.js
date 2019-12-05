let velocity = 5
let velocitySnake = velocity
let velocityObstacle = -velocity //must be negative
let refreshRate = 50 //000 / 60
let snakePosition = 1;
let snakeYPosition = 0;
let snakeJump = 0;
let snakeJumpLimit = 10;
let gravity = 1;
let score = 0;
let currentObstacles = [];
// let disableJump = false

let gameState = new Array(100).fill(0, 0, null)
let pointer = 100;

let obstacleProbability = 0.05;

let shouldExist = () => {
    return Math.random() < 0.10
}

let testCount = 0

document.addEventListener("DOMContentLoaded", function (event) {
    document.onkeydown = function (e) {
        if (snakeYPosition != 0)
            return;
        e = e || window.event;
        switch (e.which || e.keyCode) {
            case 38:
                snakeJump = snakeJumpLimit;
                break;
        }
    }
    // var element = document.getElementById('pointer');
    var playArea = document.getElementById('play-area');
    var snake = document.getElementById('snake');
    var scoreDOM = document.getElementById('score');

    addObstacle = () => {
        
        score++;
        scoreDOM.innerText = score;
        snake.style.top = 190 - snakeYPosition * 10;
        if (snakeJump) {
            snakeJump--;
            snakeYPosition++;
        } else if (snakeYPosition > 0) {
            snakeYPosition--;
        }

        // console.log(window.performance.memory)
        pointer--;
        pointer = (pointer + 100) % 100;
        // element.style.left = +(pointer * 10) + "px";
        if (gameState[pointer]) {
            let divToBeRemoved = document.getElementById(pointer);
            divToBeRemoved.parentNode.removeChild(divToBeRemoved);
            testCount--;
        }
        if (shouldExist()) {
            var newDiv = document.createElement("div");
            newDiv.className = 'obstacle play-item'
            newDiv.setAttribute("id", pointer)
            gameState[pointer] = newDiv;
            newDiv.style.left = 990;
            playArea.appendChild(newDiv);
            testCount++;
        } else {
            gameState[pointer] = null;
        }

        let obstacles = document.getElementsByClassName("obstacle");
        // currentObstacles=[];
        for (let i = 0; i < obstacles.length; i++) {
            obstacles[i].style.left = parseInt(obstacles[i].style.left) - 10 + 'px';
            let tempValue = (+obstacles[i].style.left.substring(0, obstacles[i].style.left.length - 2) / 10)
            tempValue = (tempValue + 100) % 100
            if (tempValue === snakePosition && snakeYPosition == 0) {
                alert('restart')
                score = 0;
                location.reload();
            }
            // currentObstacles.push(tempValue)
        }
    }
    setInterval(addObstacle, refreshRate)
});