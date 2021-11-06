class Twitter {
  constructor() {
    this.shapes = [
      new Rect(48, 48, 64, 64, 0),
      new Rect(202, 48, 64, 64, 0)
    ]
  }

  draw() {
    fill(255)
    noStroke()

    this.shapes.forEach((s, i) => {
      s.draw()

      Game.hits[i] = collideRectCircle(
        s.pos.x, s.pos.y, s.w, s.h,
        Game.bug.pos.x, Game.bug.pos.y, Game.bug.radius
      )
    })

    this.update()
  }

  update() {
    if (ellapsed() > 2000 && ellapsed() < 4000) {
      this.shapes.forEach(s => s.updateCoords(0, 2))
    }

    if (ellapsed() > 6000) {
      reset()
    }
  }
}
