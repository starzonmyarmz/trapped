class Home {
  constructor() {
    this.shapes = [
      new Rect(48, 48, 64, 64, 0),
      new Rect(124, 48, 64, 64, 0),
      new Rect(202, 48, 64, 64, 0)
    ]
  }

  draw() {
    fill(255)
    noStroke()

    this.update()
    this.shapes.forEach(s => s.draw())
  }

  update() {
    const ellapsed = millis() - Game.timestamp

    if (ellapsed > 2000 && ellapsed < 4000) {

      this.shapes.forEach((s) => {
        s.updateCoords(-1, 0)
      })
    }

    if (ellapsed > 6000) {
      reset()
    }
  }
}
