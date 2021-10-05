let player, bg
let blobs = []
let zoom = 1
let paused = false
let blobRadius = 8
let playerRadius = 32
let maxScore = 255

let gameScreenWidth = 5000
let gameScreenHeight = 3000

function setup() {
	createCanvas(window.innerWidth, window.innerHeight)
	player = new Player(gameScreenWidth / 2, gameScreenHeight / 2, playerRadius, {
		r: 255,
		g: 255,
		b: 255
	})
	for (let i = 0; i < 200; i++) {
		let x = random(gameScreenWidth)
		let y = random(gameScreenHeight)
		blobs[i] = new Blob(x, y, blobRadius, {
			r: random(255),
			g: random(255),
			b: random(255)
		})
	}
}

function draw() {
	background(0)
	translate(width / 2, height / 2)

	let newzoom = 64 / player.radius
	zoom = lerp(zoom, newzoom, 0.1)
	scale(zoom)

	translate(-player.position.x, -player.position.y)

	fill(65, 65, 65)
	bg = rect(-blobRadius, -blobRadius, gameScreenWidth + blobRadius * 2, gameScreenHeight + blobRadius * 2)

	for (let i = blobs.length - 1; i >= 0; i--) {
		blobs[i].show()
		if (player.eats(blobs[i])) {
			blobs.splice(i, 1)
			blobs[blobs.length] = new Blob(random(gameScreenWidth), random(gameScreenHeight), blobRadius, {
				r: random(255),
				g: random(255),
				b: random(255)
			})
		}
	}
  // console.log(bg);
  // player.outside(bg)
	player.show()
	player.update()
}

function mousePressed() {
	if (paused) {
		paused = false
		loop()
	} else {
		paused = true
		noLoop()
	}
}
