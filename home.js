class Home {
  constructor() {
    this.shapes = [
      [new Rect(48, 48, 64, 64), [2000, 4000, 'xy', -1, 0], [2000, 3000, 'wh', -.5, 0], [4000, 6000, 'xy', 0, 2], [6000, null, 'end']],
      [new Rect(124, 48, 64, 64), [2000, 4000, 'xy', -1, 0], [2000, 3000, 'wh', -.5, 0], [4000, 6000, 'xy', 0, 2], [6000, null, 'end']],
      [new Rect(202, 48, 64, 64), [2000, 4000, 'xy', -1, 0], [2000, 3000, 'wh', -.5, 0], [4000, 6000, 'xy', 0, 2], [6000, null, 'end']]
    ]
  }

  draw() {
    fill(255)
    noStroke()

    this.shapes.forEach((s, i) => {
      s[0].draw()

      Game.hits[i] = collideRectCircle(
        s[0].pos.x, s[0].pos.y, s[0].w, s[0].h,
        bug.pos.x, bug.pos.y, bug.radius
      )
    })

    this.update()
  }

  update() {
    this.shapes.forEach((s) => {
      for (let i = 1; i < s.length; i++) {
        if (ellapsed(s[i][0], s[i][1])) {
          switch (s[i][2]) {
            case 'a':
              s[0].updateAlpha(s[i][3], s[i][4])
              break
            case 'wh':
              s[0].updateDimensions(s[i][3], s[i][4])
              break
            case 'xy':
              s[0].updateCoordinates(s[i][3], s[i][4])
              break
            case 'end':
              endScene()
              break
          }
        }
      }
    })
  }
}
