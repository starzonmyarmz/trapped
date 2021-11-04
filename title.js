class Title {
  constructor() {
  }

  draw() {
    fill(255)
    noStroke()

    new Rect(width - 10, height - 10, 10, 10, 0, 0, 0).draw()
  }
}
