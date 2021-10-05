let radius,
  date,
  gemS, gemM, gemH, staticGem,
  randomColors = {}

function setup() {
  let s = lu.setScreenRatio(1)
  let canvas = createCanvas(s.w, s.h)
  lu.blockRightClick(canvas)
  frameRate(30)

  angleMode(DEGREES)
  textAlign(CENTER, CENTER)
  textStyle(BOLD)

  radius = width * 0.45

  randomColors = {
    s: [random(0, 255), random(0, 255), random(0, 255)],
    m: [random(0, 255), random(0, 255), random(0, 255)],
    h: [random(0, 255), random(0, 255), random(0, 255)]
  }

  gemS = new Gem(randomColors.s, 1)
  gemM = new Gem(randomColors.m, 1)
  gemH = new Gem(randomColors.h, 1)
  staticGem = new Gem(undefined, 2)
}

function draw() {
  translate(width / 2, height / 2)
  rotate(-90)

  date = new Date()

  showBackground()
  showHours()
  showMinutes()
  showSeconds()
  showTime()
}

function showBackground() {
  push()
  background(51)
  noFill()

  //---GEMS---
  //LEFT
  staticGem.show(-15, -radius - 8, 0)

  //RIGHT
  staticGem.show(0, radius + 8, 180)

  //TOP
  staticGem.show(radius + 8, 0, 90)

  //BOTTOM
  staticGem.show(-radius - 8, 0, -90)

  //SEC
  stroke(randomColors.s[0], randomColors.s[1], randomColors.s[2], 20)
  strokeWeight(20)
  ellipse(0, 0, radius * 2)
  stroke(randomColors.s[0], randomColors.s[1], randomColors.s[2])
  strokeWeight(1)
  ellipse(0, 0, radius * 2 - 20)
  ellipse(0, 0, radius * 2 + 20)

  //MIN
  stroke(randomColors.m[0], randomColors.m[1], randomColors.m[2], 20)
  strokeWeight(20)
  ellipse(0, 0, radius * 2 - 60)
  stroke(randomColors.m[0], randomColors.m[1], randomColors.m[2])
  strokeWeight(1)
  ellipse(0, 0, radius * 2 - 80)
  ellipse(0, 0, radius * 2 - 40)

  //HR
  stroke(randomColors.h[0], randomColors.h[1], randomColors.h[2], 20)
  strokeWeight(20)
  ellipse(0, 0, radius * 2 - 120)
  stroke(randomColors.h[0], randomColors.h[1], randomColors.h[2])
  strokeWeight(1)
  ellipse(0, 0, radius * 2 - 140)
  ellipse(0, 0, radius * 2 - 100)
  pop()
}

function showSeconds() {
  let r = radius
  push()
  let sec = date.getSeconds()
  let ms = date.getMilliseconds()
  let angle = map(sec, 0, 60, 0, 360) + map(ms, 0, 1000, 0, 6)

  stroke(randomColors.s[0], randomColors.s[1], randomColors.s[2])
  strokeWeight(20)
  noFill()
  point(r, 0)
  arc(0, 0, r * 2, r * 2, 0, angle)

  stroke(randomColors.s[0], randomColors.s[1], randomColors.s[2], 50)
  strokeWeight(10)
  line(0, 0, cos(angle) * (r * 0.7), sin(angle) * (r * 0.7))

  gemS.show(cos(angle) * (r + 20), sin(angle) * (r + 20), atan2(-(sin(angle) * r), -cos(angle) * r) - 90)
  pop()
}

function showMinutes() {
  let r = radius - 30
  push()
  let min = date.getMinutes()
  let sec = date.getSeconds()
  let angle = map(min, 0, 60, 0, 360) + map(sec, 0, 60, 0, 6)

  stroke(randomColors.m[0], randomColors.m[1], randomColors.m[2])
  strokeWeight(20)
  noFill()
  point(r, 0)
  arc(0, 0, r * 2, r * 2, 0, angle)

  stroke(randomColors.m[0], randomColors.m[1], randomColors.m[2], 50)
  line(0, 0, cos(angle) * (r * 0.6), sin(angle) * (r * 0.6))

  gemM.show(cos(angle) * (r + 20), sin(angle) * (r + 20), atan2(-(sin(angle) * r), -cos(angle) * r) - 90)
  pop()
}

function showHours() {
  let r = radius - 60
  push()
  let hr = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours()
  let min = date.getMinutes()
  let angle = map(hr, 0, 12, 0, 360) + map(min, 0, 60, 0, 30)

  stroke(randomColors.h[0], randomColors.h[1], randomColors.h[2])
  strokeWeight(20)
  noFill()
  point(r, 0)
  arc(0, 0, r * 2, r * 2, 0, angle)

  stroke(randomColors.h[0], randomColors.h[1], randomColors.h[2], 50)
  strokeWeight(30)
  line(0, 0, cos(angle) * (r * 0.4), sin(angle) * (r * 0.4))

  gemH.show(cos(angle) * (r + 20), sin(angle) * (r + 20), atan2(-(sin(angle) * r), -cos(angle) * r) - 90)
  pop()
}

function showTime() {
  let h = lu.between(date.getHours(), 0, 9, true) ? '0' + date.getHours() : date.getHours()
  let m = lu.between(date.getMinutes(), 0, 9, true) ? '0' + date.getMinutes() : date.getMinutes()
  let s = lu.between(date.getSeconds(), 0, 9, true) ? '0' + date.getSeconds() : date.getSeconds()

  push()
  rotate(90)

  textSize(width / 10)
  text(`${h}:${m}:${s}`, 0, 0)

  pop()
}

function windowResized() {
  let s = lu.setScreenRatio(1)
  resizeCanvas(s.w, s.h)

  radius = s.w * 0.45
}

