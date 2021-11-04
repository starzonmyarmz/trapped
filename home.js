class Home {
  constructor() {
    this.active = false
    this.complete = false
    this.shapes = [
      new Rect(48, 48, 64, 64, 0),
      new Rect(124, 48, 64, 64, 0),
      new Rect(202, 48, 64, 64, 0)
    ]
  }

  draw() {
    fill(255)
    noStroke()

    this.shapes.forEach(s => s.draw())
  }

  update(millis) {
    if (this.active) {
      const ellapsed = millis - this.ts

      if (ellapsed > 2000 && ellapsed < 4000) {
        this.shapes.forEach(s => s.updateCoords(-1, 0))
      }

      if (ellapsed > 6000) {
        console.log('home done')
        this.active = false
        this.complete = true
      }
    }
  }

  setTimeStart(millis) {
    if (this.ts) return
    this.ts = millis
    this.active = true
  }
}
