class HomeMessages extends Scene {
  constructor() {
    super()
    this.reset()
  }

  draw() {
    background(255)

    if (!this.song_started) {
      this.startSong(home_messages)
      this.song_started = true
    }

    Game.shapes = this.shapes
    Game.shapes.forEach((shape, i) => {
      shape.update()
      shape.draw()

      if (this.transition.alpha < 5) {
        this.createCollision(shape, i)
      }
    })

    this.transition_out.update()
    this.transition_out.draw()
    this.transition.update()
    this.transition.draw()

    if (!this.transition.q.length && !this.song_stopped) {
      this.endSong()
      this.song_stopped = true
    }

    if (this.transition.current == null && !this.transition.q.length) {
      this.saveProgress('Messages')
      this.endScene()
    }
  }

  reset() {
    this.song_started = false
    this.song_stopped = false
    this.shapes = []

    const w = (Game.width - 32) / 4
    const h = (Game.height - 32) / 6

    for (let s = 0; s < layout.length; s++) {
      for (let r = 0; r < layout[s].length; r++) {
        for (let c = 0; c < layout[s][r].length; c++) {
          if (layout[s][r][c] !== 0) {
            this.shapes.push(new Poly(
              { x: (Game.width * s + 28) + (w * c), y: h * r + 28, w: 48, h: 48, color: getHomeColor(layout[s][r][c]) },
              [
                { delay: 6000, duration: 250, props: { x: 28 + (w * c) + (Game.width * (s - 1)) }},
                { delay: 4000, duration: 250, props: { x: 28 + (w * c) + (Game.width * (s - 2)) }},
                { delay: 4000, duration: 500, props: { x: 28 + (w * c) + (Game.width * s) }}
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
        { delay: 0, duration: 2000, props: { alpha: 0 }},
        { delay: 12000, duration: 2000, props: { alpha: 255 }},
        this.endBuffer()
      ]
    )

    this.transition_out = new Poly(
      { x: 0, y: 0, w: 0, h: 0, color: '#1a73e8' },
      [
        this.startBuffer(),
        { delay: 14000, duration: 0, props: { x: 172, y: 252, w: 48, h: 48 }},
        { delay: 0, duration: 250, props: { x: 0, y: 0, w: Game.width, h: Game.height }},
        this.endBuffer()
      ]
    )
  }
}
