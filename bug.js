class Bug {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
    this.radius = 8
    this.hidden = true
  }

  draw() {
    fill('hotpink')
    noStroke()
    ellipseMode(CENTER)
    ellipse(this.pos.x, this.pos.y, this.radius)
  }

  update(x, y) {
    if (!this.hidden) {
      const mouse = createVector(x, y)

      mouse.sub(this.pos)
      mouse.setMag(0.8)

      this.acc = mouse
    }

    this.vel.add(this.acc)
    this.pos.add(this.vel)

    this.vel.limit(4)
  }
}
