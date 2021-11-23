class Bug {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)
    this.radius = 6
    this.hidden = true
  }

  draw() {
    if (this.hidden) return

    fill(7)
    noStroke()
    ellipseMode(CENTER)
    ellipse(this.pos.x + random(-1, 1), this.pos.y + random(-1, 1), this.radius)
  }

  update(x, y) {
    if (!this.hidden) {
      this.vel.set(x, y)
    }

    this.vel.limit(20)
    this.pos.add(this.vel)

    this.pos.x = constrain(this.pos.x, 0, Game.width)
    this.pos.y = constrain(this.pos.y, 0, Game.height)
  }
}
