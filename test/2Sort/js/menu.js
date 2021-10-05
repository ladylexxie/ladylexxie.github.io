class Menu {
  constructor() {
    this.pos = createVector(WIDTH, -HEIGHT)
    this.width = 300
    this.height = HEIGHT
    this.buttonHeight = 50
    this.buttons = []
    this.startButton = new Button('START')
    this.shuffleButton = new Button('SHUFFLE')
    this.addButtons()
  }

  show() {
    fill(0)
    rect(this.pos.x, this.pos.y, this.width, HEIGHT)

    let x, y

    this.buttons.forEach((button, i) => {
      if (i % 2 == 0) {
        x = this.pos.x
        y = this.pos.y + this.buttonHeight * floor(i / 2)
      } else {
        x = this.pos.x + this.width / 2
        y = this.pos.y + this.buttonHeight * floor(i / 2)
      }
      button.show(x, y, this.width / 2, this.buttonHeight, 20)
    })

    this.shuffleButton.show(this.pos.x, this.pos.y + 300, this.width, 75, 40)
    this.startButton.show(this.pos.x, this.pos.y + 375, this.width, 75, 40)
  }

  addButtons() {
    this.buttons.push(new Button("Insertion Sort"))
    this.buttons.push(new Button("Selection Sort"))
    this.buttons.push(new Button("Merge Sort"))
    this.buttons.push(new Button("Heapsort"))
    this.buttons.push(new Button("Quicksort"))
    this.buttons.push(new Button("Shellsort"))
    this.buttons.push(new Button("Bubble Sort"))
    this.buttons.push(new Button("Comb Sort"))
    this.buttons.push(new Button("Counting Sort"))
    this.buttons.push(new Button("Bucket Sort"))
    this.buttons.push(new Button("Radix Sort"))
  }

  deselect() {
    this.buttons.forEach(button => {
      button.selected = false
    })
  }

  selectButton(index) {
    this.deselect()
    this.buttons[index].selected = true

    this.show()
  }

  selectShuffle(state) {
    this.shuffleButton.selected = state
    this.show()
  }

  selectStart(state) {
    this.startButton.selected = state
    this.show()
  }
}

let sortType
function mousePressed() {
  if (!running) {
    if (lu.between(mouseX, WIDTH, WIDTH + 150, true)) {
      if (lu.between(mouseY, 0, 50, true)) {
        sortType = 1
        menu.selectButton(0)
      }
      if (lu.between(mouseY, 51, 100, true)) {
        sortType = 3
        menu.selectButton(2)
      }
      if (lu.between(mouseY, 101, 150, true)) {
        sortType = 5
        menu.selectButton(4)
      }
      if (lu.between(mouseY, 151, 200, true)) {
        sortType = 7
        menu.selectButton(6)
      }
      if (lu.between(mouseY, 201, 250, true)) {
        sortType = 9
        menu.selectButton(8)
      }
      if (lu.between(mouseY, 251, 300, true)) {
        sortType = 11
        menu.selectButton(10)
      }
    }

    if (lu.between(mouseX, WIDTH + 151, WIDTH + 300, true)) {
      if (lu.between(mouseY, 0, 50, true)) {
        console.log('Selection Sort')
        sortType = 2
        menu.selectButton(1)
      }
      if (lu.between(mouseY, 51, 100, true)) {
        sortType = 4
        menu.selectButton(3)
      }
      if (lu.between(mouseY, 101, 150, true)) {
        sortType = 6
        menu.selectButton(5)
      }
      if (lu.between(mouseY, 151, 200, true)) {
        sortType = 8
        menu.selectButton(7)
      }
      if (lu.between(mouseY, 201, 250, true)) {
        sortType = 10
        menu.selectButton(9)
      }
    }

    //Shuffle
    if (lu.between(mouseY, 300, 375, true) && lu.between(mouseX, WIDTH, width)) {
      if (sortType) {
        console.log('Shuffling...')
        menu.selectShuffle(true)
        lu.shuffleArray(lines)
        redraw()
      } else {
        console.warn('No sorting selected!')
      }
    }

    //Start
    if (lu.between(mouseY, 376, 450, true) && lu.between(mouseX, WIDTH, width)) {
      if (sortType) {
        console.log('Starting...')
        menu.selectStart(true)
        running = true
        switch (sortType) {
          case 1:
            insertionSort(lines)
            break;
          case 2:
            selectionSort(lines)
            break;
          case 3:
            console.warn('Not Yet Implemented!')
            running = false
            break;
          case 4:
            console.warn('Not Yet Implemented!')
            running = false
            break;
          case 5:
            quickSort(lines)
            break;
          case 6:
            console.warn('Not Yet Implemented!')
            running = false
            break;
          case 7:
            console.warn('Not Yet Implemented!')
            running = false
            break;
          case 8:
            console.warn('Not Yet Implemented!')
            running = false
            break;
          case 9:
            console.warn('Not Yet Implemented!')
            running = false
            break;
          case 10:
            console.warn('Not Yet Implemented!')
            running = false
            break;
          case 11:
            console.warn('Not Yet Implemented!')
            running = false
            break;
        }
      } else {
        console.warn('No sorting selected!')
      }
    }
  }
}

function mouseReleased() {
  if (menu.shuffleButton.selected) {
    menu.selectShuffle(false)
  }

  if (menu.startButton.selected) {
    menu.selectStart(false)
  }
}