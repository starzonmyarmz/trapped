class Rect {
  constructor(x, y, w, h, alpha = 1) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)
    this.w = w
    this.h = h
    this.alpha = alpha
  }

  draw(color) {
    noStroke()
    fill(`rgba(${color}, ${this.alpha})`)
    rect(this.pos.x, this.pos.y, this.w, this.h)
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
