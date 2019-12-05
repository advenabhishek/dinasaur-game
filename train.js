console.log('ml5 version::::', ml5);

console.log(snakeJumpLimit)

//currentObstacles are the current obstacles list


let train = () => {
    // console.log(currentObstacles)
    // console.log(snakeYPosition)
    // console.log(snakeJump)
    const neuralNetwork = ml5.neuralNetwork(1, 1);

}

setInterval(train, refreshRate)
