class Home {
  constructor() {
    this.reset()
  }

  setup() {
    if (Game.sound) {
      Game.song = home
      Game.song.setVolume(1)
      Game.song.loop()
    }
  }

  draw() {
    background(255)

    Game.shapes = this.shapes
    Game.shapes.forEach((shape, i) => {
      shape.update()
      shape.draw()

      if (this.transition.x > 1) {
        Game.hits[i] = collideRectCircle(
          shape.x, shape.y, shape.w, shape.h,
          Game.bug.pos.x, Game.bug.pos.y, Game.bug.radius
        )
      }
    })

    this.transition.update()
    this.transition.draw()

    if (this.transition.current == null && !this.transition.q.length) {
      endScene()
    }
  }

  reset() {
    this.shapes = []

    const w = Game.width / 4
    const h = Game.height / 6

    const layout = [[
      [1, 1, 1, 1,],
      [1, 1, 1, 1,],
      [1, 1, 1, 1,],
      [1, 1, 1, 1,],
      [1, 1, 0, 0,],
      [0, 0, 0, 0,]
    ],
    [
      [1, 1, 1, 1,],
      [1, 1, 1, 1,],
      [1, 1, 1, 1,],
      [1, 1, 1, 1,],
      [1, 1, 1, 1,],
      [1, 1, 1, 1,]
    ],
    [
      [1, 1, 1, 1,],
      [1, 1, 1, 1,],
      [1, 1, 1, 0,],
      [0, 0, 0, 0,],
      [0, 0, 0, 0,],
      [0, 0, 0, 0,]
    ]]

    for (let s = 0; s < layout.length; s++) {
      for (let r = 0; r < layout[s].length; r++) {
        for (let c = 0; c < layout[s][r].length; c++) {
          if (layout[s][r][c] === 1) {
            this.shapes.push(new Poly(
              { x: (Game.width * s + 16) + (w * c), y: h * r + 16, w: 48, h: 48 },
              [
                { delay: 6000, duration: 250, props: { x: 16 + (w * c) + (Game.width * (s - 1)) }},
                { delay: 4000, duration: 250, props: { x: 16 + (w * c) + (Game.width * (s - 2)) }}
              ]
            ))
          }
        }
      }
    }

    this.transition = new Poly(
      { x: 0, y: 0, w: Game.width, h: Game.height, color: 255 },
      [
        { delay: 0, duration: 2000, props: { alpha: 0.01 }},
        { delay: 0, duration: 0, props: { x: 96, y: 96, w: 48, h: 48 }},
        { delay: 12000, duration: 1000, props: { x: 0, y: 0, w: Game.width, h: Game.height, alpha: 255 }},
        { delay: 3000, duration: 0, props: {}}
      ]
    )
  }
}
