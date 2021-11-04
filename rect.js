class Rect {
  constructor(x, y, w, h, radius, offset_x = 0, offset_y = 0) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)
    this.w = w
    this.h = h
    this.radius = radius
    this.offset_x = offset_x
    this.offset_y = offset_y
  }

  draw() {
    fill(255)
    rect(this.pos.x, this.pos.y, this.w, this.h, this.radius)
  }

  updateCoords(x, y) {
    this.vel.set(x, y)
    this.pos.add(x, y)
  }

  updateDimensions(w, h) {
    this.w += w
    this.h += h
  }
}
