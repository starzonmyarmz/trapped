class Rect {
  constructor(x, y, w, h, radius = 0, alpha = 1) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)
    this.w = w
    this.h = h
    this.radius = radius
    this.alpha = alpha
  }

  draw() {
    fill(255)
    rect(this.pos.x, this.pos.y, this.w, this.h, this.radius)
  }

  updateCoordinates(x, y) {
    this.vel.set(x, y)
    this.pos.add(x, y)
  }

  updateDimensions(w, h) {
    this.w += w
    this.h += h
  }

  updateAlpha(alpha) {
    this.alpha += alpha
  }
}
