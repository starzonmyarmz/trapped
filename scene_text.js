class Text {
  constructor() {
    this.shapes = [
      [new Rect(0, 0, Game.width, 80, 1)],

      [new Rect(16, 104, 150, 32, 1)],
      [new Rect(Game.width - (103 + 16), 162, 103, 32, 1)],
      [new Rect(16, 218, 132, 32, 1)],
      [new Rect(Game.width - (180 + 16), 274, 180, 64, 1)],
      [new Rect(Game.width - (199 + 16), 346, 199, 64, 1)],
      [new Rect(16, 434, 87, 32, 1)],
      [new Rect(16, 434, 87, 32, 1)],
      [new Rect(16, 474, 132, 32, 1)],
      [new Rect(Game.width - (220 + 16), 530, 220, 64, 1)],
      [new Rect(Game.width - (113 + 16), 602, 113, 32, 1)],
      [new Rect(16, 658, 45, 32, 1)],
      [new Rect(Game.width - (172 + 16), 714, 172, 32, 1)],
      [new Rect(16, 770, 201, 64, 1)],
      [new Rect(16, 842, 191, 64, 1)],
      [new Rect(Game.width - (79 + 16), 930, 79, 32, 1)],
      [new Rect(Game.width - (197 + 16), 970, 197, 64, 1)],
      [new Rect(16, 1058, 191, 64, 1)],
      [new Rect(Game.width - (197 + 16), 1146, 197, 32, 1)],
      [new Rect(Game.width - (131 + 16), 1186, 131, 32, 1)],
      [new Rect(16, 1242, 191, 64, 1)],
      [new Rect(16, 1314, 105, 32, 1)],

      [new Rect(0, Game.height - 64, Game.width, 64, 1), [9000, null, 'end']]
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
