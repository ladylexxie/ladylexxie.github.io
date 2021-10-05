class LexUtils {
  constructor() {
    this.fps = 0
    console.log('Lex Utils loaded successfully!')
  }

  log(message) {
    if (message == null || message == "" || message.length == 0) return
    let time = new Date()
    console.log(`[${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}.${time.getMilliseconds()}] ${message}`)
  }

  clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp

      // [array[i], array[j]] = [array[j], array[i]]
    }
  }

  between(number, nr1, nr2, inclusive) {
    let min = Math.min.apply(Math, [nr1, nr2]), max = Math.max.apply(Math, [nr1, nr2])
    return inclusive ? number >= min && number <= max : number > min && number < max
  }

  showFPS(x, y, size) {
    let w = 30
    let h = 30
    if (frameCount % 10 == 0) {
      this.fps = frameRate()
    }
    push()
    fill(51)
    noStroke()
    textSize(20 * size)
    textAlign(CENTER, CENTER)
    rect(x, y, w * size, h * size)
    fill(255)
    text(round(this.fps), (x + w / 2) * size, (y + h / 2) * size)
    pop()
  }

  blockRightClick(c) {
    c.canvas.oncontextmenu = () => false
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  setScreenRatio(ratio) {
    if (ratio > 0) {
      let ww = windowWidth
      let hh = floor(windowWidth / ratio)

      if (hh > windowHeight) {
        hh = windowHeight
        ww = floor(hh * ratio)
      }

      return { w: ww, h: hh }
    } else return
  }

  reverseString(str) {
    return str.split('').reverse().join('')
  }

  formatNumber(number) {
    let str = String(number)

    let s = ''
    let count = 0
    for (let i = str.length - 1; i >= 0; i--) {
      s = str[i] + s
      count++
      if (count % 3 == 0 && i != 0) {
        s = ',' + s
      }
    }
    return s
  }
}

window.lu = new LexUtils()