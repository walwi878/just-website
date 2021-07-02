document.addEventListener('DOMContentLoaded', () => {
    // TODO: we can also get the grid size from user
    const GRID_WIDTH = 10
    const GRID_HEIGHT = 20
    const GRID_SIZE = GRID_WIDTH * GRID_HEIGHT
  
    // no need to type 200 divs :)
    const grid = createGrid();
    let squares = Array.from(grid.querySelectorAll('div-tetris'))
    const startBtn = document.querySelector('.button')
    const retryBtn = document.querySelector('.buttonretry')
    //const retryBtn = document.querySelector('.buttonretry')
    const hamburgerBtn = document.querySelector('.toggler')
    const menu = document.querySelector('.menu')
    const span = document.getElementsByClassName('close')[0]
    const scoreDisplay = document.querySelector('.score-display')
    const linesDisplay = document.querySelector('.lines-score')
    let currentIndex = 0
    let currentRotation = 0
    const width = 10
    let score = 0
    let lines = 0
    let timerId
    let nextRandom = 0
    const colors = [
      'url(images/blue_block.png)',
      'url(images/pink_block.png)',
      'url(images/purple_block.png)',
      'url(images/peach_block.png)',
      'url(images/yellow_block.png)'
    ]
  
  
    function createGrid() {
      // the main grid
      let grid = document.querySelector(".grid")
      for (let i = 0; i < GRID_SIZE; i++) {
        let gridElement = document.createElement("div-tetris")
        grid.appendChild(gridElement)
      }
  
      // set base of grid
      for (let i = 0; i < GRID_WIDTH; i++) {
        let gridElement = document.createElement("div-tetris")
        gridElement.setAttribute("class", "block3")
        grid.appendChild(gridElement)
      }
  
      let previousGrid = document.querySelector(".previous-grid")
      // Since 16 is the max grid size in which all the Tetrominoes 
      // can fit in we create one here
      for (let i = 0; i < 16; i++) {
        let gridElement = document.createElement("div-tetris")
        previousGrid.appendChild(gridElement);
      }
      return grid;
    }
  
  
    //assign functions to keycodes
    function control(e) {
      if (e.keyCode === 39)
        moveright()
      else if (e.keyCode === 38)
        rotate()
      else if (e.keyCode === 37)
        moveleft()
      else if (e.keyCode === 40)
        moveDown()
    }
  
    // the classical behavior is to speed up the block if down button is kept pressed so doing that
    document.addEventListener('keydown', control)
  
    //The Tetrominoes
    const lTetromino = [
      [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, 2],
      [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 2],
      [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2],
      [GRID_WIDTH, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2 + 2]
    ]
  
    const zTetromino = [
      [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
      [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1],
      [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
      [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1]
    ]
  
    const tTetromino = [
      [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2],
      [1, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
      [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
      [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1]
    ]
  
    const oTetromino = [
      [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
      [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
      [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
      [0, 1, GRID_WIDTH, GRID_WIDTH + 1]
    ]
  
    const iTetromino = [
      [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
      [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3],
      [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
      [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3]
    ]
  
    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
  
    //Randomly Select Tetromino
    let random = Math.floor(Math.random() * theTetrominoes.length)
    let current = theTetrominoes[random][currentRotation]
  
  
    //move the Tetromino moveDown
    let currentPosition = 4
    //draw the shape
    function draw() {
      current.forEach(index => {
        squares[currentPosition + index].classList.add('block')
        squares[currentPosition + index].style.backgroundImage = colors[random]
      })
    }
  
    //undraw the shape
    function undraw() {
      current.forEach(index => {
        squares[currentPosition + index].classList.remove('block')
        squares[currentPosition + index].style.backgroundImage = 'none'
      })
    }
  
    //move down on loop
    function moveDown() {
      undraw()
      currentPosition = currentPosition += width
      draw()
      freeze()
    }
  
    startBtn.addEventListener('click', () => {
      if (timerId) {
        clearInterval(timerId)
        timerId = null
        scoreDisplay.innerHTML = 'paused'
      } else {
        draw()
        scoreDisplay.innerHTML = score
        timerId = setInterval(moveDown, 1000)
        //nextRandom = Math.floor(Math.random() * theTetrominoes.length)
        displayShape()
      }
    })

    /*
    function clearGrid(){
        score = 0
        level = 1
        levelDisplay.innerHTML = ' 1'
        scoreDisplay.innerHTML = ' 0'
        displaySquares.forEach(square => {
          square.classList.remove('block')
          square.style.backgroundColor = ''
        })
        for (let i = 0; i < 199; i +=GRID_WIDTH) {
          const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]
          row.forEach(index => {
            squares[index].classList.remove('block2')
            squares[index].classList.remove('block')
            squares[index].style.backgroundColor = ''
          })
        }
      }

    retryBtn.addEventListener('click', () => {
        clearGrid()
        nextRandom = Math.floor(Math.random()*theTetrominoes.length)
        current = theTetrominoes[random][currentRotation]
        
        currentPosition = 4
        draw()
        displayShape()
    })

    */

   
      
     
  
    //move left and prevent collisions with shapes moving left
    function moveright() {
      undraw()
      const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
      if (!isAtRightEdge) currentPosition += 1
      if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
        currentPosition -= 1
      }
      draw()
    }
  
    //move right and prevent collisions with shapes moving right
    function moveleft() {
      undraw()
      const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
      if (!isAtLeftEdge) currentPosition -= 1
      if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
        currentPosition += 1
      }
      draw()
    }
  
    //freeze the shape
    function freeze() {
      // if block has settled
      if (current.some(index => squares[currentPosition + index + width].classList.contains('block3') || squares[currentPosition + index + width].classList.contains('block2'))) {
        // make it block2
        current.forEach(index => squares[index + currentPosition].classList.add('block2'))
        // start a new tetromino falling
        random = nextRandom
        nextRandom = Math.floor(Math.random() * theTetrominoes.length)
        current = theTetrominoes[random][currentRotation]
        currentPosition = 4
        draw()
        displayShape()
        addScore()
        gameOver()
      }
    }
    freeze()



    
  ///FIX ROTATION OF TETROMINOS AT THE EDGE 
  function isAtRight() {
    return current.some(index=> (currentPosition + index + 1) % width === 0)  
  }
  
  function isAtLeft() {
    return current.some(index=> (currentPosition + index) % width === 0)
  }
  
  function checkRotatedPosition(P){
    P = P || currentPosition       //get current position.  Then, check if the piece is near the left side.
    if ((P+1) % width < 4) {         //add 1 because the position index can be 1 less than where the piece is (with how they are indexed).     
      if (isAtRight()){            //use actual position to check if it's flipped over to right side
        currentPosition += 1    //if so, add one to wrap it back around
        checkRotatedPosition(P) //check again.  Pass position from start, since long block might need to move more.
        }
    }
    else if (P % width > 5) {
      if (isAtLeft()){
        currentPosition -= 1
      checkRotatedPosition(P)
      }
    }
  }
  
  //rotate the tetromino
  function rotate() {
    undraw()
    currentRotation ++
    if(currentRotation === current.length) { //if the current rotation gets to 4, make it go back to 0
      currentRotation = 0
    }
    current = theTetrominoes[random][currentRotation]
    checkRotatedPosition()
    draw()
  }
  /////////

  
  
    //Game Over
    function gameOver() {
      if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
        scoreDisplay.innerHTML = 'end'
        clearInterval(timerId)
      }
    }
  
    //show previous tetromino in scoreDisplay
    const displayWidth = 4
    const displaySquares = document.querySelectorAll('.previous-grid div-tetris')
    let displayIndex = 0
  
    const smallTetrominoes = [
      [1, displayWidth + 1, displayWidth * 2 + 1, 2], /* lTetromino */
      [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], /* zTetromino */
      [1, displayWidth, displayWidth + 1, displayWidth + 2], /* tTetromino */
      [0, 1, displayWidth, displayWidth + 1], /* oTetromino */
      [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] /* iTetromino */
    ]
  
    function displayShape() {
      displaySquares.forEach(square => {
        square.classList.remove('block')
        square.style.backgroundImage = 'none'
      })
      smallTetrominoes[nextRandom].forEach(index => {
        displaySquares[displayIndex + index].classList.add('block')
        displaySquares[displayIndex + index].style.backgroundImage = colors[nextRandom]
      })
    }
  
    //Add score
    function addScore() {
      for (currentIndex = 0; currentIndex < GRID_SIZE; currentIndex += GRID_WIDTH) {
        const row = [currentIndex, currentIndex + 1, currentIndex + 2, currentIndex + 3, currentIndex + 4, currentIndex + 5, currentIndex + 6, currentIndex + 7, currentIndex + 8, currentIndex + 9]
        if (row.every(index => squares[index].classList.contains('block2'))) {
          score += 10
          lines += 1
          scoreDisplay.innerHTML = score
          linesDisplay.innerHTML = lines
          row.forEach(index => {
            squares[index].style.backgroundImage = 'none'
            squares[index].classList.remove('block2') || squares[index].classList.remove('block')
  
          })
          //splice array
          const squaresRemoved = squares.splice(currentIndex, width)
          squares = squaresRemoved.concat(squares)
          squares.forEach(cell => grid.appendChild(cell))
        }
      }
    }



    
  function cleargrid(){
    score = 0
    lines = 0
    
    
    linesDisplay.innerHTML = ' 0'
    scoreDisplay.innerHTML = ' 0'
    displaySquares.forEach(square => {
      square.classList.remove('block')
      square.style.backgroundImage = 'none'
    })
    for (let i = 0; i < GRID_SIZE; i +=GRID_WIDTH) {
      const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]
      row.forEach(index => {
        squares[index].classList.remove('block')
        squares[index].classList.remove('block2')
        squares[index].classList.remove('tetromino')
        squares[index].style.backgroundImage = 'none'
      })
    }
  }

  retryBtn.addEventListener('click', () => {
      cleargrid()
      
      nextRandom = Math.floor(Math.random()*theTetrominoes.length)
      current = theTetrominoes[random][currentRotation]
      
      
      currentPosition = 4
      draw()
      displayShape()

  })
  
    //Styling eventListeners
    hamburgerBtn.addEventListener('click', () => {
      menu.style.display = 'flex'
    })
    span.addEventListener('click', () => {
      menu.style.display = 'none'
    })
  
  })