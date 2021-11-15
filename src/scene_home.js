class Home extends Scene {
  constructor() {
    super()
    this.reset()
  }

  draw() {
    background(255)

    if (!this.song_started) {
      this.startSong(home)
      this.song_started = true
    }

    Game.shapes = this.shapes
    Game.shapes.forEach((shape, i) => {
      shape.update()
      shape.draw()

      if (this.transition.x > 1) {
        this.createCollision(shape, i)
      }
    })

    this.transition.update()
    this.transition.draw()

    if (!this.transition.q.length && !this.song_stopped) {
      this.endSong()
      this.song_stopped = true
    }

    if (this.transition.current == null && !this.transition.q.length) {
      this.endScene()
    }
  }

  reset() {
    this.song_started = false
    this.song_stopped = false
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
        this.startBuffer(),
        { delay: 2000, duration: 2000, props: { alpha: 0.01 }},
        { delay: 0, duration: 0, props: { x: 96, y: 96, w: 48, h: 48 }},
        { delay: 12000, duration: 1000, props: { x: 0, y: 0, w: Game.width, h: Game.height, alpha: 255 }},
        this.endBuffer()
      ]
    )
  }
}
